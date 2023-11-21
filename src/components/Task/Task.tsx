import { ITask } from '@/types/Data'
import { Text } from '../UI'

const Task = ({ task }: { task: ITask }) => {
  return (
    <div className="p-8 h-fit rounded-xl border-4 border-orange-500 resize">
      <Text className="text-2xl break-words">{task.header}</Text>
      {task.content !== '' && (
        <Text className="text-md text-sm  leading-6 col-auto break-words mt-3">
          {task.content}
        </Text>
      )}
    </div>
  )
}

export default Task
