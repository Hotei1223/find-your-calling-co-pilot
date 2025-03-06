import Textarea from "../components/global/Textarea"
import { IdeaClientsQuestions, IdeaClientsQuestionstwo, IdeaClientsQuestionsthree } from "../Constant"
import { Link } from "react-router-dom"

export const IdeaClients = () => {
    return (
        <div className="w-full flex justify-center items-start">
            <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-8 my-8 md:mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold leading-[25px] text-center">
                        Define Your Ideal Clients
                    </h2>
                </div>
                <div className="px-4 py-[25px] w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Demographics :</h2></div>
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
                    <div className="self-stretch text-white text-lg font-bold"><h2>Psychographics :</h2></div>
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
                    <div className="self-stretch text-white text-lg font-bold"><h2>Pain Points & Challenges :</h2></div>
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
                    <Link to="/client-summary">
                        <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
