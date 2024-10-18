import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage(){
    return(
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src="https://plus.unsplash.com/premium_photo-1720601645664-98b6b06efeca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BhJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="" /></span>
                        <span>User name: <b>nd</b></span>
                        <span>E-mail: <b>nd@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>My list</h1>
                        <button>Create new Post</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved list</h1>
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage