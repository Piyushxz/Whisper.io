import { useRecoilValue } from "recoil"
import { activeUser, wsState } from "../atoms"
import { useRef } from "react"

export const Input = () =>{
    const inputRef = useRef<HTMLInputElement>(null)
    const currentUser = useRecoilValue(activeUser)
    const wsVal = useRecoilValue(wsState)
    const handleSendMessage = () =>{

        wsVal?.send(JSON.stringify({
            type:"chat",
            payload:{
                message:inputRef.current?.value,
                sentBy:currentUser
            }
        }))
        //@ts-ignore
        inputRef.current.value="";
    }

    return(
        <>  
            <div className="flex mt-2 ">
                <input ref={inputRef} onKeyDown={(e)=>e.key==="Enter" ? handleSendMessage() : null}
                 type="text" placeholder="Enter a Message..." className="w-4/5 h-12 bg-black ml-4 text-white  border border-[#D3D3D3] border-opacity-40 rounded-lg"/>
                <button onClick={handleSendMessage}
                className="bg-black text-white px-4 py-2 rounded-lg  border border-[#D3D3D3] border-opacity-40 ml-4 hover:bg-gray-900 transition-all ease-in-out duration-500">
                    Send
                </button>
            </div>
        </>
    )
}