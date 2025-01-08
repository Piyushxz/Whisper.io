import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Home = () => {
  const router = useNavigate();

  return (
    <div className="h-screen w-full">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="flex justify-center mt-24 text-center">
          <div className="flex flex-col gap-2 border border-black border-opacity-20 p-4 rounded-lg w-[80vw]">
            <h1 className="font-manrope tracking-tighter text-3xl md:text-6xl font-black text-white">
              This is an Anonymous Chat Room
            </h1>
            <h1 className="tracking-tighter font-manrope text-xl md:text-2xl font-black text-white text-center">
              Chat secretly with your friends,
            </h1>
          </div>
        </div>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex justify-center mt-4"
      >
        <button
          onClick={() => {
            router("/chat");
            toast.success("Welcome to the chat room!");
          }}
          className="border border-black border-opacity-20 px-6 py-4 bg-white tracking-tighter font-manrope text-[#FF69B4] rounded-lg hover:opacity-70 ease-in-out transition-all"
        >
          Start Now
        </button>
      </motion.div>

      
        <div className="flex justify-center mt-24">
        <div className="w-[80vw] grid grid-cols-12 gap-6">
            
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4, 
                ease: "easeInOut",
                repeat: Infinity, 
            }}
            className="mt-24 md:col-span-4 col-span-12 border border-black border-opacity-20 h-48 rounded-lg tracking-tighter font-manrope text-xl md:text-2xl font-black text-white flex justify-center items-center  shadow-md"
            >
            <h1>1.Join a Room</h1>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{
                y: [0, -15, 0], 
            }}
            transition={{
                duration: 4.5,
                ease: "easeInOut",
                repeat: Infinity, 
            }}
            className="md:mb-24 mb-8 md:col-span-4 col-span-12 border border-black border-opacity-20 h-48 rounded-lg tracking-tighter font-manrope text-xl md:text-2xl font-black text-white flex justify-center items-center  shadow-md"
            >
            <h1>2.Share The Room</h1>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{
                y: [0, -12, 0], 
            }}
            transition={{
                duration: 4.2, 
                ease: "easeInOut",
                repeat: Infinity, 
            }}
            className="mt-8 md:col-span-4 col-span-12 border border-black border-opacity-20 h-48 rounded-lg tracking-tighter font-manrope text-xl md:text-2xl font-black text-white flex justify-center items-center  shadow-md"
            >
            <h1>3.Chat</h1>
            </motion.div>
        </div>
        </div>


      <Footer />
    </div>
  );
};
