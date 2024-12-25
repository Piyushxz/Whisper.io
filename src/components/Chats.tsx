import { useRecoilValue, useSetRecoilState } from "recoil"
import { ChatBubble } from "./ui/ChatBubble"
import { roomId, wsState } from "../atoms"
import { useEffect,useRef } from "react"

export const Chats = ()=>{
    const roomNo = useRecoilValue(roomId)
    const wsStateVal = useSetRecoilState(wsState)
    
    
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


        })
        ()
    }
    ,[])
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
                      
                    <ChatBubble text={"hey there"} variant="sender"/>
              
                    <ChatBubble text={"hey there"} variant="sender"/>
                    <ChatBubble text={"hey there"} variant="user"/>
                    <ChatBubble text={"hey there"} variant="sender"/>
                    <ChatBubble text={"hey there"} variant="user"/>
                    <ChatBubble text={"hey there"} variant="sender"/>
                    <ChatBubble text={"hey there"} variant="user"/>
                    <ChatBubble text={"hey there"} variant="sender"/>
                    <ChatBubble text={"hey there"} variant="user"/>

                    </div>
                </div>
            </div>
        </>
    )
}