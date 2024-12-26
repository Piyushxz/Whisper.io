import { atom } from "recoil";

export const isRoomEntered =atom({
        key:"isRoomEntered",
        default:false
})


export const showRoomID = atom({
    key:"showRoomID",
    default:false
})

export const roomId = atom({
    key:"roomId",
    default:""
})



export const wsState = atom<WebSocket | null>({
    key: "wsState",
    default: null, 
});

export const activeUser = atom({
    key:"activeUser",
    default:null
})