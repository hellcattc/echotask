import { Task } from '@/types/Data'
import TaskComponent from './Task'

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const Tasks = tasks.map((task) => {
    return <TaskComponent task={task} key={task.id} />
  })

  return (
    <div className="grid grid-cols-4 w-full col-span-10 mt-6 gap-4 auto-rows-auto grid-flow-row dense">
      {Tasks}
    </div>
  )
}

export default TaskList
