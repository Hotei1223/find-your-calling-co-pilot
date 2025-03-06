
import { Link } from "react-router-dom";

const ValueLadderResult = () => {
    return (
        <div className="w-full flex justify-center items-start">
            <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-4 my-8 md:mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold leading-[25px] text-center">
                        Your Value Ladder is Ready
                    </h2>
                    <h4 className="text-white text-sm font-regular italic tracking-wide leading-[25px] text-center">
                        Here’s your structured value ladder with customer journey insights.
                    </h4>
                    <button className="h-full w-8 border-white border rounded-full text-white p-[6.5px] text-center cursor-pointer hover:bg-white hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-full flex flex-col gap-2">
                        <div className="self-stretch text-white text-lg font-bold"><h2>Value Ladder Structure :</h2></div>
                        <div className="w-full flex flex-col gap-4 ml-2">
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3>Free Resource</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Resource 1</p></li>
                                    <li className="ml-8"><p>Resource 2</p></li>
                                </ol>
                            </div>
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3 pre >Entry-Level Offer</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Resource 1</p></li>
                                    <li className="ml-8"><p>Resource 2</p></li>
                                </ol>
                            </div>
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3 pre >Mid-Range Offer</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Resource 1</p></li>
                                    <li className="ml-8"><p>Resource 2</p></li>
                                </ol>
                            </div>
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3 pre >Primary Offer</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Resource 1</p></li>
                                    <li className="ml-8"><p>Resource 2</p></li>
                                </ol>
                            </div>
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3 pre >Premium Offer  </h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Resource 1</p></li>
                                    <li className="ml-8"><p>Resource 2</p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-full flex flex-col gap-2">
                        <div className="self-stretch text-white text-lg font-bold"><h2>Customer Journey Narrative :</h2></div>
                        <div className="w-full flex flex-col gap-4 ml-2">
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3>Introduction :</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Add more specific outcomes</p></li>
                                    <li className="ml-8"><p>Quantify benefits where possible</p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-4 inline-flex">
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
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-full flex flex-col gap-2">
                        <div className="self-stretch text-white text-lg font-bold"><h2>Validation Plan :</h2></div>
                        <div className="w-full flex flex-col gap-4 ml-2">
                            <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                                <h3>Plan :</h3>
                                <ol className="list-disc space-y-1">
                                    <li className="ml-8"><p>Add more specific outcomes</p></li>
                                    <li className="ml-8"><p>Quantify benefits where possible</p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-start gap-8">
                    <Link to="/">
                        <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Download
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="min-w-[70px] md:min-w-[120px] btn-secondary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Redo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ValueLadderResult
