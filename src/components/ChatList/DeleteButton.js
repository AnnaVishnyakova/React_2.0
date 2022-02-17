import { useCallback } from "react"

export const DeleteButton =({id,onClick})=>{
    const hendleClick = useCallback(()=>{
        onClick(id)
    },[onClick,id])
    return(
        <div onClick={hendleClick}>del</div>
    )
}