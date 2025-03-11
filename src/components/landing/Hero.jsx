import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <><div className="py-[60px]">
            <div className="flex flex-col items-center justify-center md:space-y-6 space-y-6">
                <h1 className="text-center text-white lg:text-[56px] md:text-[48px] text-[32px] leading-[40px] lg:leading-[60px] md:leading-[55px] font-bold lg:px-[140px] lg:tracking-wide">Welcome to Your Value Ladder Co-pilot</h1>
                <h3 className="text-center text-white lg:text-lg text-md font-normal md:leading-[30px] lg:px-[140px]">Let’s design a value ladder with five essential price points that will maximize engagement and revenue for your business. By the end, you’ll have a structured customer journey that builds trust and increases the value you deliver at every stage.                </h3>
                <Link to="/identify-value-ladder">
                    <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                        Get Started
                    </button>
                </Link>
            </div>
        </div></>
    )
}

export default Hero 