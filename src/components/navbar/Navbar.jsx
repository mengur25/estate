import { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom";
function Navbar() {
    const [open, setOpen] = useState(false)

    const user= true; 
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="logo.png" alt=""></img>
                    <span>ndEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {user ? (<div className="user">
                    <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                    <span>nd</span>
                    <Link to = "/profile" className="profile">Profile
                        <div className="notification">2 </div>
                    </Link>
                </div>) 
                : (<><a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a> </>)}
                <div className="menuIcon">
                    <img src="menu.png" alt="" onClick={()=> setOpen((prev => !prev)) } />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar