export function createRoomId():string{
    let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    let id:string = ""
    for(let i = 0 ; i < 6;i++){
        id += string[Math.floor(Math.random()*string.length)]
    }


    return id
}