interface ChatBubbleProps{
    variant :"user" | "sender",
    text:string
}

const ChatBubbleStyles = {
    "user":" bg-white text-black ",
    "sender":" bg-[#0866ff] text-white"
}


export const ChatBubble = (props:ChatBubbleProps)=>{
    return(
        <>
        <span className={` ${ChatBubbleStyles[props.variant]}   px-4 py-2 rounded-lg `}>
            {props.text}
        </span>
        </>
    )
}