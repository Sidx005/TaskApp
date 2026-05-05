import { useState } from "react";
import type { Task,TaskStatus } from "./types";
import { initialTasks } from "./data";
import TaskList from "./components/TaskList";
import TaskForm from "./components/Taskform";

export default function App(){
  const [tasks,setTasks]=useState<Task[]>(initialTasks)
  const addTask=(title:string)=>{
    const newTask:Task={
      id:Date.now(),
      title,
      status:"todo"
    }
    setTasks([...tasks,newTask]);
  }
  const moveTask=(id:number,status:TaskStatus)=>{
    const updated=tasks.map(t=>t.id===id?{...t,status}:t);
    setTasks(updated);
  };

  const deleteTask=(id:number)=>{
    const deleted=tasks.filter(t=>t.id!==id)
    setTasks(deleted)
  }
  return(
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>TaskFlow</h1>

      <TaskForm addTask={addTask} />

      <div style={{ display: "flex", gap: "20px" }}>
        <TaskList
          title="To Do"
          status="todo"
          tasks={tasks}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <TaskList
          title="In Progress"
          status="inprogress"
          tasks={tasks}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <TaskList
          title="Done"
          status="done"
          tasks={tasks}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}