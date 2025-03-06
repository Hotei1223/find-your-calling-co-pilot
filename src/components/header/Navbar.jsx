
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mt-6">
            <a href="/"><div className="logo">
                <img src="IR_Rockstar.png" alt="IR Logo" style={{ width: "60px", height: "60px" }} />
            </div></a>
            <div>
                <button className="min-w-[70px] md:min-w-[120px] btn-secondary h-10 p-4 rounded-2xl cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5">
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar