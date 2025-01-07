import { LoadingIcon } from "./LoadingIcon"

interface buttonProps{
    loading:boolean,
    onClick :()=>void,
    text:string

}

export const Button = (props:buttonProps)=>{
    return(
        <>
        <button onClick={props.onClick} disabled={props.loading}
                 className="w-[95%] bg-white text-black font-manrope tracking-tighter font-medium p-2 m-4 text-xl hover:bg-slate-200 transition-all ease-in-out rounded-lg">
                   {
                    props.loading? 
                    <LoadingIcon/>:
                    props.text
                   } 
        </button>
        </>
    )
}