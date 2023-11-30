import TaskWindowExposed, { ContentHandle } from '@/components/Task/TaskWindow'
import { useCallback, useRef } from 'react'
import { addTask } from '@/store/slices/taskSlice'

const AddTask = () => {
  const ref = useRef<ContentHandle>(null)

  const getAction = useCallback(() => {
    return addTask({
      header: ref.current?.header()?.value,
      content: ref.current?.content()?.value,
    })
  }, [])

  return (
    <TaskWindowExposed ref={ref} getAction={getAction} initialContent="hey" />
  )
}

export default AddTask
