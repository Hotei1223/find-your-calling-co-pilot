

import Button from "../global/Button"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center border-b-2 border-gray-200">
            <Link href="/"><div className="logo">
                <img src="/images/IR_Rockstar.png" alt="IR Logo" width={60} height={60} style={{width : "auto", height : "auto"}}/>
            </div></Link>
            <div>
                <Button name="Logout" type="secondary"/>
            </div>
        </nav>
    )
}

export default Navbar