interface ChatBubbleProps {
    variant: "user" | "sender";
    text: string,
    username:string

  }
  
  const ChatBubbleStyles = {
    user: " bg-[#0866ff] text-white",
    sender: " bg-white text-black ",
  };


  
  export const ChatBubble = (props: ChatBubbleProps) => {
    return (
      <div
        className={`flex flex-col py-1 ${
          props.variant === "user"
            ? "justify-end items-end"
            : "justify-start items-start"
        } max-w-[600px] w-full`}
      >
        <h1 className="font-montserrat text-xs text-white pb-1">{props.username}</h1>
        <div
          className={`${
            ChatBubbleStyles[props.variant]
          } px-4 py-2 rounded-lg shadow-md text-sm inline-block font-montserrat max-w-full break-words`}
        >
          {props.text}
        </div>
      </div>
    );
  };
  
  