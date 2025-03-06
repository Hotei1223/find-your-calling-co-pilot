import Textarea from "../components/global/Textarea"
import { IdeaClientsQuestions, IdeaClientsQuestionstwo, IdeaClientsQuestionsthree } from "../Constant"
import { Link } from "react-router-dom"

export const IdentifyValueLadder = () => {
    return (
        <div className="w-full flex justify-center items-start">
            <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-8 my-8 md:mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold leading-[25px] text-center">
                    Identify Your Value Ladder Offers
                    </h2>
                    <h4 className="text-white text-sm font-regular italic tracking-wide leading-[25px] text-center">
                        Answer the following questions to create your value ladder:
                    </h4>
                </div>
                <div className="px-4 py-[25px] w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Free Resource :</h2></div>
                    {IdeaClientsQuestions.map((question) => (
                        <div key={question.id} className="w-full flex flex-col gap-2">
                            <div className="self-stretch text-white text-md font-normal text-justify hyphens-auto">
                                <h3>{question.question}</h3>
                            </div>
                            <Textarea placeholder="Enter your input here." area={question.area} />
                        </div>
                    ))}
                </div>
                <div className="px-4 py-[25px] w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Entry-Level Paid Offer (Under $500) :</h2></div>
                    {IdeaClientsQuestionstwo.map((question) => (
                        <div key={question.id} className="w-full flex flex-col gap-2">
                            <div className="self-stretch text-white text-md font-normal text-justify hyphens-auto">
                                <h3>{question.question}</h3>
                            </div>
                            <Textarea placeholder="Enter your input here." area={question.area} />
                        </div>
                    ))}
                </div>
                <div className="px-4 py-[25px] w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Primary Offer ($2,000–$10,000) :</h2></div>
                    {IdeaClientsQuestionsthree.map((question) => (
                        <div key={question.id} className="w-full flex flex-col gap-2">
                            <div className="self-stretch text-white text-md font-normal text-justify hyphens-auto">
                                <h3>{question.question}</h3>
                            </div>
                            <Textarea placeholder="Enter your input here." area={question.area} />
                        </div>
                    ))}
                </div>
                <div className="px-4 py-[25px] w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Premium Offer ($10,000+) :</h2></div>
                    {IdeaClientsQuestionsthree.map((question) => (
                        <div key={question.id} className="w-full flex flex-col gap-2">
                            <div className="self-stretch text-white text-md font-normal text-justify hyphens-auto">
                                <h3>{question.question}</h3>
                            </div>
                            <Textarea placeholder="Enter your input here." area={question.area} />
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-start">
                    <Link to="/value-ladder-result">
                        <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
