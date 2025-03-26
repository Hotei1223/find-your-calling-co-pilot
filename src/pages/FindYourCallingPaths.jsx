import React, { useState, useEffect } from "react";
import Textarea from "../components/global/Textarea";
import { IdeaClientsQuestions } from "../Constant";
import { Link } from "react-router-dom";
import bannerImg from "../../src/assets/Find_Your_Calling_banner.png";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ShimmeringComponent from "../components/global/ShimmeringComponent";
import jsPDF from "jspdf";
import { BASE_API_URL } from "../../config";
import { getAuthToken } from '../../utils/auth';

import { jwtDecode } from "jwt-decode"; 

export const FindYourCallingPaths = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [email,setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tokenChecked, setTokenChecked] = useState(false);

  useEffect(() => {
      const getTokenAndSetEmail = async () => {
          const token = getAuthToken();

          if (token) {
              try {
                  const decodedToken = jwtDecode(token);
                  const extractedEmail = decodedToken.email || decodedToken.sub;
                  setEmail(extractedEmail);
                //   console.log("eml:", extractedEmail);
              } catch (error) {
                  console.error("Error decoding token:", error);
                 
              } finally {
                  setTokenChecked(true); 
              }
          } else {
              setTokenChecked(true); 
          }
      };

      getTokenAndSetEmail();
  }, []);

  useEffect(() => {
      const fetchUserData = async () => {
          // Check if email is available and token has been checked
          if (email && tokenChecked) {
              setLoading(true);
              try {
                  const response = await axios.get(`${BASE_API_URL}/user/${email}`);
                  if (response.data) {
                      setFormData(response.data.formData);
                      setResponse(response.data.gptResponse || null);
                  }
              } catch (error) {
                  console.error("Error fetching user data:", error);
              } finally {
                  setLoading(false);
              }
          }
      };

      fetchUserData();
  }, [email, tokenChecked]); 

  const handleback = () => {
    window.history.back();
  };

  const handleInputChange = (questionId, value) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [questionId]: false,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    const allQuestions = [...IdeaClientsQuestions];

    allQuestions.forEach((q) => {
      if (!formData[q.id] || formData[q.id].trim() === "") {
        valid = false;
        newErrors[q.id] = true;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const allQuestions = [...IdeaClientsQuestions];

      const formattedData = allQuestions.map((q) => ({
        questionId: q.id,
        category: q.category,
        question: q.question,
        answer: formData[q.id] ? formData[q.id].trim() : "",
      }));

      const res = await axios.post(`${BASE_API_URL}`, {
        formData: formattedData,
        email,
      });

      setResponse(res.data.answer);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => setShowModal(true);

  const handleProceedStartOver = async () => {
    setShowModal(false);
    setLoading(true);
    try {
      await axios.delete(`${BASE_API_URL}/user/${email}`);
      setFormData({});
      setResponse(null);
      setErrors({});
    } catch (error) {
      console.error("Error clearing data:", error);
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
      marginY: 60,
    };

    let y = PAGE.marginY;
    const maxWidth = PAGE.width - PAGE.marginX * 2;

    const processLine = (text, options) => {
      const { fontSize = 12, isBold = false, isBullet = false } = options;
      const lineHeight = fontSize * 1.5;

      doc
        .setFontSize(fontSize)
        .setFont("helvetica", isBold ? "bold" : "normal");

      const cleanText = text.replace(/^\s*[#-*]+\s*/, "").replace(/\*\*/g, "");
      const indent = isBullet ? 15 : 0;
      const wrappedText = doc.splitTextToSize(cleanText, maxWidth - indent);

      const spaceNeeded = wrappedText.length * lineHeight;
      if (y + spaceNeeded > PAGE.height - PAGE.marginY) {
        doc.addPage();
        y = PAGE.marginY;
      }

      if (isBullet && wrappedText.length > 0) {
        doc.text("•", PAGE.marginX, y + 2);
        wrappedText[0] = wrappedText[0].replace(/^•\s*/, "");
      }

      doc.text(wrappedText, PAGE.marginX + (isBullet ? 10 : 0), y, {
        indent: indent,
        maxWidth: maxWidth - indent,
      });

      y += spaceNeeded + (isBullet ? 5 : 8);
    };

    response.split("\n").forEach((line) => {
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

    doc.save("FYC path.pdf");
  };

  const renderQuestions = (questions, title) => (
    <div className="px-4 py-[25px] w-full bg-[#16171b]/70 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch text-white text-lg font-bold">
        <h2>{title}</h2>
      </div>
      {questions.map((question) => (
        <div key={question.id} className="w-full flex flex-col gap-2">
          <div className="self-stretch text-white text-md font-normal text-justify hyphens-auto">
            <h3
              style={{ fontSize: "20px" }}
              className="mt-1 whitespace-pre-wrap font-bold"
            >
              {question.question}
            </h3>
            <h4 className="text-gray-400 text-sm mt-1">
              {question.desc.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h4>
          </div>
          <Textarea
            placeholder="Describe your thoughts..."
            area={question.area}
            value={formData[question.id] || ""}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className={errors[question.id] ? "border-red-500" : ""}
          />
          {errors[question.id] && (
            <span className="text-red-500 text-sm">
              This field is required.
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full flex justify-center items-start">
      <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-8 my-8 md:mb-8">
        {!response && !loading && (
          <>
            <div className="flex justify-center items-center w-full h-56 relative rounded-2xl">
              <img
                src={bannerImg}
                className="w-full h-full object-cover rounded-2xl"
                alt="FYC Copilot Banner"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white text-lg font-regular tracking-wide leading-[25px]">
                Answer the following questions to identify your Entrepreneurial
                Path.
              </h4>
            </div>
          </>
        )}

        {response && !loading && (
          <>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-2xl font-bold leading-[25px] text-center">
                Your Entrepreneurial Path
              </h2>
              {/* <h4 className="text-white text-sm font-regular italic tracking-wide leading-[25px] text-center">
                        Tailored recommendations to boost your traffic.
                    </h4> */}
              <button
                onClick={handleback}
                className="h-full w-8 border-white border rounded-full text-white p-[6.5px] text-center cursor-pointer hover:bg-white hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
        {loading && (
          <>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-2xl font-bold leading-[25px] text-center">
                Give us a moment, we're putting your <b>Entrepreneurial Path</b>{" "}
                together.....
              </h3>
            </div>
          </>
        )}

        {loading && <ShimmeringComponent width="100%" height="200px" />}

        {!response && !loading && (
          <>
            {renderQuestions(IdeaClientsQuestions, "")}

            <div className="w-full flex flex-row justify-center items-center">
              <button
                onClick={handleSubmit}
                className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide"
              >
                Generate
              </button>
            </div>
          </>
        )}

        {response && !loading && (
          <>
            <div className="bg-[#16171b]/90 rounded-2xl border border-[#e1e5ea]/40 p-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                children={response}
                components={{
                  p: ({ children }) => (
                    <p className="text-white mb-4">{children}</p>
                  ), // Add margin to paragraphs
                  h1: ({ children }) => (
                    <h1 className="text-green-500 font-bold mt-6 mb-4">
                      {children}
                    </h1>
                  ), // Add margin to headings
                  h2: ({ children }) => (
                    <h2 className="text-red-500 font-bold mt-6 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-blue-600 font-bold mt-6 mb-4">
                      {children}
                    </h3>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-5 text-white mb-4">
                      {children}
                    </ul>
                  ), // Add margin to lists
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-5 text-white mb-4">
                      {children}
                    </ol>
                  ), // Add margin to lists
                  li: ({ children }) => (
                    <li className="text-white">{children}</li>
                  ),
                }}
              />
            </div>
            <div className="w-full flex justify-center mt-4 space-x-2">
              <button
                onClick={handleDownloadPDF}
                className="btn-primary h-10 px-6 rounded-2xl text-white text-sm font-medium"
              >
                Download PDF
              </button>
              <button
                onClick={handleStartOver}
                className="btn-primary h-10 px-6 rounded-2xl text-white text-sm font-medium"
              >
                Start Over
              </button>
            </div>
          </>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#16171b] p-6 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-4">
                Confirm Start Over
              </h3>
              <p className="text-white mb-6">
                If you proceed, all your previous answers will be erased. Are
                you sure you want to start over?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceedStartOver}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
