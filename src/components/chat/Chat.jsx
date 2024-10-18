import { useState } from "react"
import "./chat.scss"

function Chat() {

    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Message</h1>
                <div className="message">
                    <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                    <span>nd</span>
                    <p>di an di doi qa huhu...</p>
                </div>
                <div className="message">
                    <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                    <span>nd</span>
                    <p>di an di doi qa huhu...</p>
                </div>
                <div className="message">
                    <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                    <span>nd</span>
                    <p>di an di doi qa huhu...</p>
                </div>
                <div className="message">
                    <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                    <span>nd</span>
                    <p>di an di doi qa huhu...</p>
                </div>
                <div className="message">
                    <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                    <span>nd</span>
                    <p>di an di doi qa huhu...</p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" />
                        nd
                    </div>
                    <span className="close" onClick={() => setChat(null) }>x</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>di le di chu doi lam roi</p>
                        <span>30 minutes ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>di le di chu doi lam roi</p>
                        <span>27 minutes ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>dang toi ne doi xiu</p>
                        <span>23 minutes ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>di le di</p>
                        <span>22 minutes ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>biet roi ma</p>
                        <span>10 minutes ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>um</p>
                        <span>5 minutes ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>ok</p>
                        <span>3 minutes ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea placeholder="Type in"></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat