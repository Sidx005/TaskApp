// import React from 'react'
import type { Task, TaskStatus } from '../types'
import TaskItem from './TaskItem';

interface Props {
    title:string,
    status:TaskStatus;
    tasks:Task[];
    moveTask:(id:number,status:TaskStatus)=>void;
    deleteTask:(id:number)=>void;

}

const TaskList = ({title,status,tasks,moveTask,deleteTask}: Props) => {
    const filtered=tasks.filter(task=>task.status===status)
    return (
   <div style={{ border: "1px solid #ccc", padding: "10px", width: "30%" }}>
      <h3>{title}</h3>

      {filtered.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>  )
}

export default TaskList