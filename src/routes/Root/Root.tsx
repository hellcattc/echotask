import TaskList from '@/components/Task/TaskList'
import { Button, Text } from '@/components/UI'
import { useRef, useCallback } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Root = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  const toAddTask = useCallback(() => {
    navigate('add_task')
  }, [navigate])

  return (
    <>
      <Button className="border-yellow-300" ref={ref} onClick={toAddTask}>
        <Text>Создать новый таск</Text>
      </Button>
      <Outlet />
      <TaskList />
    </>
  )
}

export default Root
