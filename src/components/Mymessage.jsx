const Mymessage = ({message}) => {
    const style = {
        float : "right", 
        marginRight : "18px",
        backgroundColor : "#3B2A50",
        marginTop : "10px",
        padding : "5px",
        color : "white"}
    if(message?.attachment?.length > 0){
        return(
            <img src={message?.attachment[0].file} alt="messae attachment"
            className="message-image"
                style={{float : "right"}}
            />
        )
    }
    return ( 
        <div className="message" style={style}>
           {message.text}
        </div>
     );
}
 
export default Mymessage;