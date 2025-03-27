import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="py-[60px]">
            <div className="flex flex-col items-center justify-center md:space-y-6 space-y-6">
                <h2 className="text-center text-white lg:text-[56px] md:text-[48px] text-[32px] leading-[40px] lg:leading-[60px] md:leading-[55px] font-bold lg:px-[160px] lg:tracking-wide">Welcome to Find Your Calling Paths</h2>
                
                {/* Video element */}
                <div className="w-full max-w-[800px] aspect-video mb-6">
                    <video 
                        className="w-full h-full object-cover rounded-lg"
                        controls
                        preload="metadata"
                    >
                        <source src="https://hoteiprod.s3.ap-southeast-2.amazonaws.com/Your+calling+01+.mp4" type="video/mp4" />
                    </video>
                </div>

                <Link to="/identify-your-calling">
                    <button className="min-w-[70px] md:min-w-[120px] btn-primary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5 tracking-wide">
                       Get Started
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero 
