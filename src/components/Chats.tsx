import { useRecoilValue, useSetRecoilState } from "recoil"
import { ChatBubble } from "./ui/ChatBubble"
import { activeUser, roomId, wsState } from "../atoms"
import { useEffect,useRef, useState } from "react"

export const Chats = ()=>{
    const roomNo = useRecoilValue(roomId)
    const wsStateVal = useSetRecoilState(wsState)
    const [messages,setMessages] = useState([{message:"hey",sentBy:"abc"}])
    const currentUser = useRecoilValue(activeUser)
    
    useEffect(()=>{
        (async ()=>{
            const ws = new WebSocket('ws://localhost:8080')
            wsStateVal(ws)
            
            ws.onopen=()=>{
                ws.send(JSON.stringify({
                    type:"join",
                    payload:{
                        roomId:roomNo
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

    console.log(messages)
    return(
        <>
            <div className="flex flex-col">
                <div className="h-[20vh]  my-2 mx-4 border border-[#D3D3D3] border-opacity-40 rounded-lg bg-black">
                    <h1 className="font-montserrat font-black text-3xl text-white m-4" >
                        Whisper.io
                    </h1>
                </div>

                <div className="h-[55vh]  my-2 mx-4 border border-[#D3D3D3] border-opacity-40 rounded-lg bg-black overflow-y-auto">
                    <div className="m-6 flex flex-col">
                    
                    {
                        messages.map(({message,sentBy})=>
                        sentBy === currentUser ?
                        <ChatBubble text={message} variant="user"/>
                        :
                        <ChatBubble text={message} variant="sender"/>
                        )
                    }

                    </div>
                </div>
            </div>
        </>
    )
}