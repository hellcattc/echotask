import { Task } from '@/types/Data'
import { Text } from '../UI'

const Task = ({ task }: { task: Task }) => {
  return (
    <div className="p-8 h-fit rounded-xl border-4 border-orange-500 resize">
      <Text className="text-2xl mb-4">{task.header}</Text>
      <Text className="text-md text-sm  leading-6 col-auto">
        {task.content}
      </Text>
    </div>
  )
}

export default Task
