import { Chats } from "./Chats"
import { Input } from "./Input"
import {motion} from "motion/react"
export const Chatbox = () =>{
    return(
        <>
        <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",}}>
            <div className="md:w-[600px] w-[90vw] h-[90vh] bg-[#191919] shadow-inner rounded-lg border border-[#D3D3D3] border-opacity-40 ">
                <div className="flex flex-col h-full ">
                    <div className="h-[90vh]  border-b border-[#D3D3D3] border-opacity-40  ">
                        <Chats/>
                    </div>
                    <div className="h-[10vh] ">
                        <Input/>
                    </div>
                </div>
            </div>
            </motion.div>
        </>
    )
}