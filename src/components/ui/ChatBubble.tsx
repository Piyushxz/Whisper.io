interface ChatBubbleProps {
    variant: "user" | "sender";
    text: string;
  }
  
  const ChatBubbleStyles = {
    user: " bg-[#0866ff] text-white",
    sender: " bg-white text-black ",
  };


  
  export const ChatBubble = (props: ChatBubbleProps) => {
    return (
        <div  className={`flex py-1 ${props.variant ==="user" ?" justify-end " :" justify-start"}`}>
            <span
                className={`${
                ChatBubbleStyles[props.variant]
                } px-4 py-2 rounded-lg shadow-md  text-sm  inline-block font-montserrat`}
            >
                {props.text}
            </span>
        </div>

    );
  };
  