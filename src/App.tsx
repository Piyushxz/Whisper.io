import { Chatbox } from "./components/Chatbox"
import { isRoomEntered } from "./atoms"
import { useRecoilValue } from "recoil"
import { CreateRoomComponent } from "./components/CreateRoomComponent"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Toaster } from "sonner"
function App() {


  const roomEntered = useRecoilValue(isRoomEntered)
  return (
    <>
  <Toaster theme="light" position='top-center'/>
    <Routes>
      <Route path="/chat" element={      <div className='h-screen bg-primaryPink flex justify-center items-center '>
        {
          roomEntered ? <Chatbox/> :<CreateRoomComponent/>
        }
      </div>}/>

      <Route path="/" element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
