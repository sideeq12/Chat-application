const Mymessage = ({message}) => {
    if(message?.attachment?.length > 0){
        return(
            <img src={message?.attachment[0].file} alt="messae attachment"
            className="message-image"
                style={{float : "right"}}
            />
        )
    }
    return ( 
        <div className="message" style={{float : "right", marginRight : "18px", backgroundColor : "#3B2A50"}}>
           {message.text}
        </div>
     );
}
 
export default Mymessage;