import { createRoomId } from "../utils"
import { activeUser, isRoomEntered, roomId, showRoomID } from "../atoms"
import { useRecoilState, useSetRecoilState } from "recoil"
import { useRef, useState } from "react"
import { Button } from "./ui/Button"

export const CreateRoomComponent = ()=>{

    const [showId,setShowID] = useRecoilState(showRoomID)
    const setRoomId = useSetRecoilState(roomId)
    const setActiveUser = useSetRecoilState(activeUser)
    const setIsRoomEntered = useSetRecoilState(isRoomEntered)
    const [isLoading,setIsLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const userRef = useRef<HTMLInputElement>(null);

    const handleShowRoomID = () => {
        setIsLoading(true); 
        setShowID(false);   
    
        setTimeout(() => {
            setShowID(true);  
            setIsLoading(false); 
        }, 1000);
    };

    const hanldeJoinRoom = ()=>{
        if(inputRef.current ){
            setRoomId(inputRef.current.value)
            //@ts-ignore
             setActiveUser(userRef.current.value) 
            setIsRoomEntered(true)
        }

    }
    
    return(
        <>
            <div className="w-[95vw] md:w-[700px] bg-[#191919] border border-[#D3D3D3] border-opacity-40 rounded-lg">
                <div className="flex flex-col justify-center">
                <h1 className="font-montserrat font-black text-3xl text-white m-4" >
                        Whisper.io
                </h1>
                <Button text="Create Room" onClick={handleShowRoomID} loading={isLoading}/>
                {
                    showId &&

                    <div className="mx-4 h-10 bg-[black] text-white  border border-[#D3D3D3] border-opacity-40 rounded-lg flex justify-between items-center px-4">
                    <div className="flex ">
                        <h1 className="font-montserrat text-gray-500 ">
                            Room ID  :   {createRoomId()}
                                
                            
                        </h1>
                    </div>
                    <div className="hover:bg-[#191919] p-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                    </div>
                </div>
                }


                <div className="flex m-4 justify-between mt-8 flex-col gap-4">
                <input ref={userRef}
                 type="text" placeholder="Enter Username" className="w-[90vw] md:w-[650px] h-12 bg-black  text-white  border border-[#D3D3D3] border-opacity-40 rounded-lg"/>
                <div>
                <div className="flex gap-2">
                    <input ref={inputRef}
                    type="text" placeholder="Enter Room ID" className="w-[70vw] h-12 bg-black  text-white  border border-[#D3D3D3] border-opacity-40 rounded-lg"/>
                    <button onClick={hanldeJoinRoom}
                    className="bg-black text-white px-4 py-2 rounded-lg  border border-[#D3D3D3] border-opacity-40 ml-4 hover:bg-gray-800 transition-all ease-in-out duration-500">
                        Join Room
                    </button>
                </div>

                </div>

            </div>
                </div>
            </div>
        </>
    )
}