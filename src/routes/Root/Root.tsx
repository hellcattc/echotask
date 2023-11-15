import TaskList from '@/components/layout/Task/TaskList'
import { Button, Text } from '@/components/layout/UI'
import { useRef, useCallback } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// const lastId = useAppSelector(
//   (state) => state.taskReducer[state.taskReducer.length - 1].id,
// )

// const addTaskOnClick = useCallback(() => {
//   dispatch(addTask({ id: lastId + 1, header: 'hello', content: 'hello' }))
// }, [dispatch, lastId])

const Root = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  const toAddTask = useCallback(() => {
    navigate('add_task')
  }, [navigate])

  return (
    <div className="text-xl w-full flex flex-col items-center px-16 pt-8">
      <Button className="border-yellow-300" ref={ref} onClick={toAddTask}>
        <Text>Создать новый таск</Text>
      </Button>
      <Outlet />
      <TaskList />
    </div>
  )
}

export default Root
