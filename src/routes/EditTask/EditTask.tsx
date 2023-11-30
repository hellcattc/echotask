import { useCallback, useRef } from 'react'
import TaskWindowExposed, {
  ContentHandle,
} from '../../components/Task/TaskWindow'
import { useTypedParams } from 'react-router-typesafe-routes/dom'
import ROUTES from '@/types/Routes'
import { useAppSelector } from '@/store/hooks'
import { updateTaskById } from '@/store/slices/taskSlice'

const EditTask = () => {
  const ref = useRef<ContentHandle>(null)

  const { id } = useTypedParams(ROUTES.INDEX.EDIT_TASK)

  const task = useAppSelector((state) =>
    state.taskReducer.find((task) => task.id == id),
  )

  const getAction = useCallback(() => {
    return updateTaskById({
      id: id,
      header: ref.current?.header()?.value,
      content: ref.current?.content()?.value,
    })
  }, [])

  return (
    <TaskWindowExposed
      ref={ref}
      getAction={getAction}
      initialContent={task?.content}
      initialHeader={task?.header}
    />
  )
}

export default EditTask
