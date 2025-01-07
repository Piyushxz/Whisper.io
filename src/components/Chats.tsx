import { useRecoilValue, useSetRecoilState } from "recoil"
import { ChatBubble } from "./ui/ChatBubble"
import { activeUser, roomId, wsState } from "../atoms"
import { useEffect,useRef, useState } from "react"
import { toast } from "sonner"

export const Chats = ()=>{
    const roomNo = useRecoilValue(roomId)
    const wsStateVal = useSetRecoilState(wsState)
    const [messages,setMessages] = useState([{message:"hey",sentBy:"abc"}])
    const currentUser = useRecoilValue(activeUser)
    const chatContainerRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        (async ()=>{
            const ws = new WebSocket('wss://chatappwebsockets.onrender.com')
            console.log(ws)
            wsStateVal(ws)
            
            ws.onopen=()=>{
                ws.send(JSON.stringify({
                    type:"join",
                    payload:{
                        roomId:roomNo,
                        username:currentUser
                    }
                }))
            }

            ws.onmessage = (e) => {
                try {
                    const data = JSON.parse(e.data);
                    console.log(e)
                    console.log(data)
                    setMessages((prev) => [
                        ...prev,
                        { message: data.message, sentBy: data.sentBy }])
                } catch (error) {
                    console.error("Failed to parse WebSocket message:", error);
                }
        
        }

            
        return ()=> (ws.close())
        })
        ()
    }
    ,[])
    useEffect(()=>{
        if(chatContainerRef.current){
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

        }
    },[messages])

    
    const handleCopyClick = ()=>{
        
        navigator.clipboard.writeText(roomNo)
        toast.success("Room ID copied")
    }
    return(
        <>
            <div className="flex flex-col ">
                <div className="h-[15vh]  my-2 mx-4 border border-[#D3D3D3] border-opacity-40 rounded-lg bg-primaryPink flex flex-col">
                    <h1 className="font-manrope tracking-tighter   text-3xl text-white m-4" >
                        Whisper.io
                    </h1>
                    <div className="h-6 md:h-8 w-[95%] bg-white border border-[#D3D3D3] border-opacity-40 rounded-lg mx-4 mb-2 flex justify-between items-center">
                        <h1 className="font-montserrat texting-tigther text-black">
                            RoomID  :  {roomNo}
                                
                            
                        </h1>
                    
                    <div onClick={handleCopyClick} className="hover:bg-white p-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#191919"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                    </div>
                    </div>
                </div>

                <div ref={chatContainerRef}
                 className="h-[60vh]  my-2 mx-4 border border-[#D3D3D3] border-opacity-40 rounded-lg overflow-y-auto">
                    <div className="m-6 flex flex-col">
                    
                                        {messages.map(({ message, sentBy }) => (
                        <div className="">
                            <ChatBubble
                            text={message}
                            variant={sentBy === currentUser ? "user" : "sender"}
                            username={sentBy}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}