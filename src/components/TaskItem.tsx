import type {Task,TaskStatus} from '../types'
interface Props {
  task: Task;
  moveTask: (id: number, status: TaskStatus) => void;
  deleteTask: (id: number) => void;
}

export default function TaskItem({ task, moveTask, deleteTask }: Props) {
  return (
    <div style={{ margin: "10px 0", padding: "5px", border: "1px solid gray" }}>
      <p>{task.title}</p>

      <select
        value={task.status}
        onChange={(e) =>
          moveTask(task.id, e.target.value as TaskStatus)
        }
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}