import React, { useState, useEffect } from 'react';
import Textarea from "../components/global/Textarea";
import { IdeaClientsQuestions } from "../Constant";
import ShimmeringComponent from "../components/global/ShimmeringComponent";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion'; // Import framer-motion
import bannerImg from "../assets/Find_Your_Calling_banner.png";

export const FindYourCallingPaths = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [email] = useState("ai.studio.projects@gmail.com");
    const [response, setResponse] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.industryrockstar.ai/server6/api/value-ladder/user/${email}`
                );
                if (response.data) {
                    const fetchedFormData = {};
                    response.data.qaPairs.forEach((qa) => {
                        fetchedFormData[qa.questionId] = qa.answer;
                    });
                    setFormData(fetchedFormData);
                    setResponse(response.data.gptResponse || null);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, [email]);

    const handleRadioChange = (questionId, value) => {
        setFormData(prev => ({ ...prev, [questionId]: value }));
        setErrors(prev => ({ ...prev, [questionId]: false }));
    };

    const handleInputChange = (questionId, value) => {
        setFormData(prev => ({ ...prev, [questionId]: value }));
        setErrors(prev => ({ ...prev, [questionId]: false }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        IdeaClientsQuestions.forEach(question => {
            if (!formData[question.id] || formData[question.id].toString().trim() === '') {
                valid = false;
                newErrors[question.id] = true;
            }
        });

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setLoading(true);
        try {
            const qaPairs = IdeaClientsQuestions.map(question => ({
                questionId: question.id,
                category: "ValueLadder",
                question: question.question,
                answer: formData[question.id].toString().trim()
            }));

            const res = await axios.post(
                'https://api.industryrockstar.ai/server6/api/value-ladder',
                { qaPairs, email }
            );

            setResponse(res.data.answer);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        if (!response) return;

        const doc = new jsPDF({
            unit: "pt",
            format: "a4",
            putOnlyUsedFonts: true,
        });

        const PAGE = {
            width: 595.28,
            height: 841.89,
            marginX: 40,
            marginY: 60
        };

        let y = PAGE.marginY;
        const maxWidth = PAGE.width - PAGE.marginX * 2;

        const processLine = (text, options) => {
            const { fontSize = 12, isBold = false, isBullet = false } = options;
            const lineHeight = fontSize * 1.5;

            doc.setFontSize(fontSize)
                .setFont("helvetica", isBold ? "bold" : "normal");

            const cleanText = text.replace(/^\s*[#-*]+\s*/, "").replace(/\*\*/g, "");
            const indent = isBullet ? 15 : 0;
            const wrappedText = doc.splitTextToSize(cleanText, maxWidth - indent);

            if (y + wrappedText.length * lineHeight > PAGE.height - PAGE.marginY) {
                doc.addPage();
                y = PAGE.marginY;
            }

            if (isBullet && wrappedText.length > 0) {
                doc.text("•", PAGE.marginX, y + 2);
                wrappedText[0] = wrappedText[0].replace(/^•\s*/, "");
            }

            doc.text(wrappedText, PAGE.marginX + (isBullet ? 10 : 0), y, {
                indent: indent,
                maxWidth: maxWidth - indent
            });

            y += wrappedText.length * lineHeight + (isBullet ? 5 : 8);
        };

        response.split("\n").forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) {
                y += 12;
                return;
            }

            if (trimmed.startsWith("# ")) {
                processLine(trimmed, { fontSize: 22, isBold: true });
            } else if (trimmed.startsWith("## ")) {
                processLine(trimmed, { fontSize: 18, isBold: true });
            } else if (trimmed.startsWith("### ")) {
                processLine(trimmed, { fontSize: 16, isBold: true });
            } else if (trimmed.match(/^[-*]\s/)) {
                processLine(trimmed, { fontSize: 12, isBullet: true });
            } else {
                processLine(trimmed, { fontSize: 12 });
            }
        });

        doc.save("Value_Ladder_Offers.pdf");
    };

    const handleStartOver = () => setShowModal(true);

    const handleProceedStartOver = async () => {
        setShowModal(false);
        setLoading(true);
        try {
            await axios.delete(`https://api.industryrockstar.ai/server6/api/value-ladder/user/${email}`);
            setFormData({});
            setResponse(null);
            setErrors({});
        } catch (error) {
            console.error("Error clearing data:", error);
        } finally {
            setLoading(false);
        }
    };

    const fadeInVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            className="w-full flex justify-center items-start"
            initial="initial"
            animate="animate"
            variants={fadeInVariants}
        >
            <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-8 my-8 md:mb-8">
                {/* Back Button */}
                <div className="flex items-center mb-4">
                    <button
                        onClick={() => window.history.back()}
                        className="h-full w-8 border-white border rounded-full text-white p-[6.5px] text-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-200"
                        aria-label="Go back"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center items-center w-full h-56 relative rounded-2xl">
                    {/* <div className="flex flex-col gap-4 w-full h-full bg-black bg-opacity-50 rounded-2xl absolute z-10">
                        <h2 className="text-white text-2xl font-bold leading-[25px] text-center top-[45%] absolute z-20 left-[30%]">
                        </h2>
                        </div> */}
                    <img src={bannerImg} className="w-full h-full object-cover rounded-2xl object-center" />
                </div>
            
                {/* Title */}
                <motion.h2
                    className="text-white text-xl font-bold leading-[25px] text-center"
                    variants={fadeInVariants}
                >
                    {loading
                        ? " Give us a moment, we're putting your calling together....."
                        : response
                            ? " Your Calling Strategy"
                            : "Answer these questions to find your calling."}
                </motion.h2>

                {/* Loading Shimmer */}
                {loading && <div className="w-full bg-gray-700 rounded-xl"><ShimmeringComponent width="100%" height="200px" /></div>}

                {/* Input Form */}
                {!response && !loading && (
                    <motion.div
                        className="px-4 py-[25px] w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex"
                        variants={fadeInVariants}
                    >
                        <div className="self-stretch text-white text-lg font-bold">
                            {/* <h2>Free Resource :</h2> */}
                        </div>
                        {IdeaClientsQuestions.map((question) => (
                            <motion.div key={question.id} className="w-full flex flex-col gap-2" variants={fadeInVariants}>
                                <div className="self-stretch text-white text-md font-normal text-justify hyphens-auto">
                                    <h3>{question.question}</h3>
                                </div>
                                {question.options ? (
                                    <div className="flex flex-col gap-2">
                                        {question.options.map((option, index) => (
                                            <label key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-[#222328] rounded-md p-2 transition-colors duration-200">
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={option}
                                                    checked={formData[question.id] === option}
                                                    onChange={() => handleRadioChange(question.id, option)}
                                                    className="appearance-none h-5 w-5 border border-gray-300 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 cursor-pointer"
                                                    aria-label={option}
                                                />
                                                <span className="text-white">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <Textarea
                                        placeholder="Enter your input here."
                                        area={question.area}
                                        value={formData[question.id] || ''}
                                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                                        className={`w-full p-2.5 bg-[#222328] border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 ${errors[question.id] ? 'border-red-500' : 'border-gray-600'}`}
                                    />
                                )}
                                {errors[question.id] && (
                                    <span className="text-red-500 text-sm">This field is required.</span>
                                )}
                            </motion.div>
                        ))}

                        <div className="w-full flex justify-center mt-6">
                            <button
                                onClick={handleSubmit}
                                className="min-w-[120px] btn-primary h-10 px-6 rounded-2xl text-white text-sm font-medium hover:scale-105 transition-transform duration-200"
                            >
                                Generate My Calling
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* AI Response */}
                {response && !loading && (
                    <motion.div variants={fadeInVariants}>
                        <div className="bg-[#16171b]/90 rounded-2xl border border-[#e1e5ea]/40 p-4">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                children={response}
                                components={{
                                    p: ({ children }) => <p className="text-white mb-4">{children}</p>, // Add margin to paragraphs
                                    h1: ({ children }) => <h1 className="text-green-500 font-bold mt-6 mb-4">{children}</h1>, // Add margin to headings
                                    h2: ({ children }) => <h2 className="text-red-500 font-bold mt-6 mb-4">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-blue-600 font-bold mt-6 mb-4">{children}</h3>,
                                    ul: ({ children }) => <ul className="list-disc ml-5 text-white mb-4">{children}</ul>, // Add margin to lists
                                    ol: ({ children }) => <ol className="list-decimal ml-5 text-white mb-4">{children}</ol>, // Add margin to lists
                                    li: ({ children }) => <li className="text-white">{children}</li>,
                                }}
                            />
                        </div>
                        <div className="w-full flex justify-center mt-4 space-x-6">
                            <button
                                onClick={handleDownloadPDF}
                                className="btn-primary h-10 px-6 rounded-2xl text-white text-sm font-medium hover:scale-105 transition-transform duration-200"
                            >
                                Download PDF
                            </button>
                            <button
                                onClick={handleStartOver}
                                className="btn-primary h-10 px-6 rounded-2xl text-white text-sm font-medium hover:scale-105 transition-transform duration-200"
                            >
                                Start Over
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Start Over Modal */}
                {showModal && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="bg-[#16171b] p-6 rounded-lg">
                            <h3 className="text-white text-lg font-bold mb-4">Confirm Start Over</h3>
                            <p className="text-white mb-6">This will erase all your previous answers. Are you sure?</p>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-600 rounded-2xl text-white hover:bg-gray-700 transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleProceedStartOver}
                                    className="px-4 py-2 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-colors duration-200"
                                >
                                    Proceed
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default FindYourCallingPaths;
