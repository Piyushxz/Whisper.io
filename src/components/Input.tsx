export const Input = () =>{
    return(
        <>  
            <div className="flex mt-2">
                <input type="text" placeholder="Enter a Message..." className="w-4/5 h-12 bg-black ml-4 text-white  border border-[#D3D3D3] border-opacity-40 rounded-lg"/>
                <button className="bg-black text-white px-4 py-2 rounded-lg  border border-[#D3D3D3] border-opacity-40 ml-4">
                    Send
                </button>
            </div>
        </>
    )
}