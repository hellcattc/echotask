import TaskComponent from './Task'
import { useAppSelector } from '@/store/hooks'

const TaskList = () => {
  const tasks = useAppSelector((state) => state.taskReducer)

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
