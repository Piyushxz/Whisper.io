interface ChatBubbleProps {
    variant: "user" | "sender";
    text: string;
  }
  
  const ChatBubbleStyles = {
    user: "bg-white text-black ",
    sender: "bg-[#0866ff] text-white ",
  };


  
  export const ChatBubble = (props: ChatBubbleProps) => {
    return (
        <div className={`flex py-1 ${props.variant ==="user" ?" justify-end " :" justify-start"}`}>
            <span
                className={`${
                ChatBubbleStyles[props.variant]
                } px-4 py-2 rounded-lg shadow-md  text-sm  inline-block`}
            >
                {props.text}
            </span>
        </div>

    );
  };
  