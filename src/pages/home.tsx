import { Navbar } from "../components/Navbar"
import {motion} from "motion/react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
export const Home = ()=>{

    const router = useNavigate()
    return(
        <div className="h-screen w-full ">
            <Navbar/>

            <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",}}>
            <div className="flex justify-center mt-20 text-center  ">
                <div className="flex flex-col gap-2 border border-black border-opacity-20 p-4 rounded-lg w-[80vw] ">
                <h1  
                className="font-manrope tracking-tighter text-4xl md:text-6xl font-black text-white ">This is a Anonymous Chat room </h1>

                <h1 className="tracking-tighter font-manrope text-xl md:text-2xl font-black  text-white text-center ">Chat secretly with your friends ,</h1>

                </div>

            </div>

            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",}} className="flex justify-center mt-4" >
                <button onClick={()=>{router("/chat")
                    toast.success("Welcome to the chat room!")
                }}
                 className="border border-black border-opacity-20 px-6 py-4 bg-white tracking-tighter font-manrope text-[#FF69B4] rounded-lg hover:opacity-70 ease-in-out transition-all">Start Now</button>
            </motion.div>





        </div>
    )
}