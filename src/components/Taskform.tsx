import React, { useState } from "react";

interface Props{
    addTask:(title:string)=>void;


}

export default function TaskForm({addTask}:Props){
    const [text,setText]=useState<string>("")
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if(!text.trim()) return
        addTask(text)
        setText("")
    }

return(
    <form onSubmit={handleSubmit}>
       <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button> 
    </form>
)
}