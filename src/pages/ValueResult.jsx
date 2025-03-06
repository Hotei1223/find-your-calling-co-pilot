import Textarea from "../components/global/Textarea"
import { Link } from "react-router-dom";

const ValueResult = () => {
    return (
        <div className="w-full flex justify-center items-start">
            <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-4 my-8 md:mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold leading-[25px] text-center">
                        Your Value Proposition
                    </h2>
                    <button className="h-full w-8 border-white border rounded-full text-white p-[6.5px] text-center cursor-pointer hover:bg-white hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-full flex flex-col gap-2">
                        <div className="self-stretch text-white text-lg font-bold"><h2>Initial Value Proposition :</h2></div>
                        <div className="w-full flex flex-col gap-2 ml-2">
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <p>I help [target market] who are struggling with [key problem] by providing [solution] that leads to [outcome].</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className="self-stretch text-white text-lg font-bold"><h2>Refinement Suggestions :</h2></div>
                        <div className="w-full flex flex-col gap-4 ml-2">
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3>Suggestion 1 :</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Add more specific outcomes</p></li>
                                    <li className="ml-8"><p>Quantify benefits where possible</p></li>
                                </ol>
                            </div>
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3>Suggestion 1 :</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Add more specific outcomes</p></li>
                                    <li className="ml-8"><p>Quantify benefits where possible</p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className="self-stretch text-white text-lg font-bold"><h2>Feedback & Testing Plan :</h2></div>
                        <div className="w-full flex flex-col gap-4 ml-2">
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Does this statement clearly convey the benefit?</p></li>
                                    <li className="ml-8"><p>Which part resonates most with your needs?</p></li>
                                    <li className="ml-8"><p>What can be improved for clarity?</p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-start gap-8">
                    <Link to="/idea-clients">
                        <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Download
                        </button>
                    </Link>
                    <Link to="/idea-clients">
                        <button className="min-w-[70px] md:min-w-[120px] btn-secondary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Redo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ValueResult