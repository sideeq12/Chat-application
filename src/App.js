import { ChatEngine } from "react-chat-engine"
// import ChatFeed from "./components/chatFeed"

const App = () =>{
    return(
        <ChatEngine 
        height="100vh"
        projectID="d54274f4-318b-44cf-9d8c-612cca25c5f4"
        userName="Sideeq"
        userSecret="123123"
        // renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
            />
    )
}

export default App;
