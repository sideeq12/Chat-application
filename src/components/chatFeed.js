import TheirMessage from "./TheirMessage"
import Mymessage from "./Mymessage"
import MessageForm from "./message-Form"


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages} = props
    const chat = chats && chats[activeChat]
    console.log(chat)

    const renderMessage = ()=>{
        const keys = Object.keys(messages)
        // console.log(keys)
        return  keys.map((key, index)=>{
        const message = messages[key]
        const lastMessagekey = index == 0 ? null : keys[index-1];
        const IsMymessage = userName == message.sender.username; 
        return (
            <div key={`msg_${index}`}>
            <div className="message-block" style={{width: "100%"}}>
                {
                    IsMymessage ? <Mymessage message={message} /> :
                     <TheirMessage  message={message} lastMessage={messages[lastMessagekey]}/>
                }
            </div>
            <div className="read-receipt" style={{ marginRight : IsMymessage ? "18px" : "0px", marginLeft : IsMymessage ? '0px' : "68px"}}>
                read receipt
            </div>
            </div>
        ) })
    }
    if(!chat) return "Loading..."
    return (<div className="chatfeed">
    <div className="chat-title-container chatfeed">
        <div className="chat-title chatfeed">{chat?.title}</div>
        <div className="chat-subtitle">
            {chat.people.map((person)=> ` ${person.person.username}`)}
        </div>

        {renderMessage()}

        <div style={{height: "100px"}} />
        <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
        </div>
    </div>
       
    </div>  );
}
 
export default ChatFeed;