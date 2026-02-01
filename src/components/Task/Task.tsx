import { TaskStored } from '@/types/Data'
import { Text } from '../UI'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import Edit from '../UI/SVG/Edit'

const Task = ({ task }: { task: TaskStored }) => {
  const navigate = useNavigate()

  const toEditTask = useCallback(() => {
    navigate(`edit_task/${task.id}`)
  }, [navigate, task])

  return (
    <div className="p-8 h-fit rounded-xl border-4 border-orange-500 resize">
      <Text className="text-2xl break-words">{task.header}</Text>
      {task.content !== '' && (
        <Text className="text-md text-sm  leading-6 col-auto break-words mt-3">
          {task.content}
        </Text>
      )}
      <Edit onClick={toEditTask} className="hover:cursor-pointer float-right" />
    </div>
  )
}

export default Task
