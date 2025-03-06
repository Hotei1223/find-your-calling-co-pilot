import Textarea from "../components/global/Textarea"
import { Link } from "react-router-dom";

const ClientSummary = () => {
    return (
        <div className="w-full flex justify-center items-start">
            <div className="md:max-w-[900px] md:w-[800px] max-w-[768px] space-y-4 my-8 md:mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold leading-[25px] text-center">
                        Ideal Client Profile
                    </h2>
                    <button className="h-full w-8 border-white border rounded-full text-white p-[6.5px] text-center cursor-pointer hover:bg-white hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Demographics :</h2></div>
                    <div className="w-full flex flex-col gap-2 ml-2">
                        <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                            <p>Age: 25-40</p>
                            <p>Industry: Tech, Creative Arts</p>
                            <p>Income: $50k-$100k </p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Psychographics :</h2></div>
                    <div className="w-full flex flex-col gap-2 ml-2">
                        <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                            <p>Values: Innovation, Sustainability</p>
                            <p>Interests: Technology, Art, Travel </p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Key Problems :</h2></div>
                    <div className="w-full flex flex-col gap-2 ml-2">
                        <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                            <p>Difficulty scaling their business</p>
                            <p>Lack of efficient tools</p>
                            <p>Marketing struggles</p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Critical Problem to Focus On :</h2></div>
                    <div className="w-full flex flex-col gap-2 ml-2">
                        <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2">
                            <p>Lack of efficient tools (Impacts growth)</p>
                            <p>Lack of efficient tools (Impacts growth)</p>
                            <p>Lack of efficient tools (Impacts growth)</p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 w-full bg-[#16171b]/90 rounded-[20px] border border-[#e1e5ea]/40 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch text-white text-lg font-bold"><h2>Validation Plan :</h2></div>
                    <div className="w-full flex flex-col gap-2 ml-2">
                        <div className="self-stretch text-white text-sm font-semibold text-justify hyphens-auto flex flex-col gap-2">
                            <h3> Interview Questions :</h3>
                        </div>
                        <div className="self-stretch text-white text-sm font-normal text-justify hyphens-auto flex flex-col gap-2 ml-2">
                            <p>What are your biggest challenges in...?</p>
                            <p>Have you tried solving this problem before?</p>
                            <p>What motivates you to look for solutions?</p>
                            <p>How do you usually find solutions?</p>
                            <p>What platforms do you use for research?</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 ml-2">
                        <div className="self-stretch text-white text-md font-semibold text-justify hyphens-auto flex flex-col gap-2">
                            <h3>Validation Tips :</h3>
                            <p className="text-sm font-extralight italic">Most users find current solutions ineffective due to complexity and cost.</p>
                        </div>
                        <Textarea placeholder="Enter your input here." area="h-20" />
                    </div>
                </div>
                <div className="w-full flex flex-start gap-8">
                    <Link to="/idea-clients">
                        <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                            Download Plan
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

export default ClientSummary