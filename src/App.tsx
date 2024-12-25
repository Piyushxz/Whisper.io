import { Chatbox } from "./components/Chatbox"
import { isRoomEntered } from "./atoms"
import { useRecoilValue } from "recoil"
import { CreateRoomComponent } from "./components/CreateRoomComponent"

function App() {


  const roomEntered = useRecoilValue(isRoomEntered)
  return (
    <>
      <div className='h-screen bg-black flex justify-center items-center'>
        {
          roomEntered ? <Chatbox/> :<CreateRoomComponent/>
        }
      </div>
    </>
  )
}

export default App
