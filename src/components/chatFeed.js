import TheirMessage from "./TheirMessage"
import Mymessage from "./Mymessage"
import MessageForm from "./message-Form"


const ChatFeed = (props) => {
    console.log(props)
    const { chats, activeChat, userName, messages} = props
    const chat = chats && chats[activeChat]


    // const renderMessage = ()=>{
    //     const keys = Object.keys(messages)
    //     // console.log(keys)
    //     return  keys.map((key, index)=>{
    //     const message = messages[key]
    //     const lastMessagekey = index == 0 ? null : keys[index-1];
    //     const IsMymessage = userName == message.sender.username; 
    //     return (
    //         <div key={`msg_${index}`}>
    //         <div className="message-block" style={{width: "100%"}}>
    //             {
    //                 IsMymessage ? <Mymessage message={message} /> :
    //                  <TheirMessage  message={message} lastMessage={messages[lastMessagekey]}/>
    //             }
    //         </div>
    //         <div className="read-receipt" style={{ marginRight : IsMymessage ? "18px" : "0px", marginLeft : IsMymessage ? '0px' : "68px"}}>
    //             read receipt
    //         </div>
    //         </div>
    //     ) })
    // }
    // if(!chat) return "Loading..."
    return (<div>
   
        
        hello
    </div>  );
}
 
export default ChatFeed;