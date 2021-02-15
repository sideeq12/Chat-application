const TheirMessage = ({lastmessage, message}) => {
    const isFirstMessageByUser = !lastmessage || lastmessage.sender.username != message.sender.username ;

  return (   
       <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" 
                style={{backgroundImage : `url(${message?.sender?.avatar})`}} />
            )}
                {
                    message?.attachment?.length > 0 ?
                    (
            <img src={message?.attachment[0].file} alt="messae attachment"
            className="message-image"
                style={{marginLeft : isFirstMessageByUser ? "4px" : "48px"}} /> 
                ) : (
                    <div className="message" style={{float : "left", backgroundColor : "#CABCDC"}}>
               {message.text}
                  </div>
                )
                }
                    
        </div>
     );
}
 
export default TheirMessage;