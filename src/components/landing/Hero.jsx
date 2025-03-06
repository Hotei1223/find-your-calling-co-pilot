import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <><div className="py-[60px]">
            <div className="flex flex-col items-center justify-center md:space-y-6 space-y-6">
                <h1 className="text-center text-white lg:text-[56px] md:text-[48px] text-[32px] leading-[40px] lg:leading-[60px] md:leading-[55px] font-bold lg:px-[100px] lg:tracking-wide">Unlock Your Ideal Client Profile with Target Market Agent</h1>
                <h3 className="text-center text-white lg:text-xl text-md font-normal md:leading-[25px]">Clarify your target market, drive strategic growth, and achieve measurable results</h3>
                <Link to="/idea-clients">
                    <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                        Get Started
                    </button>
                </Link>
            </div>
        </div></>
    )
}

export default Hero 