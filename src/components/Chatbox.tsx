import { Chats } from "./Chats"
import { Input } from "./Input"

export const Chatbox = () =>{
    return(
        <>
            <div className="w-[600px] h-[800px] lg:h-[1150px] xl:h-[650px] bg-[#191919] shadow-inner rounded-lg border border-[#D3D3D3] border-opacity-40 ">
                <div className="flex flex-col h-full ">
                    <div className="h-[90vh] border-b border-[#D3D3D3] border-opacity-40  ">
                        <Chats/>
                    </div>
                    <div className="h-[10vh] ">
                        <Input/>
                    </div>
                </div>
            </div>
        </>
    )
}