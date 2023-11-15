import TaskList from '@/components/layout/Task/TaskList'
import { Button, Text } from '@/components/layout/UI'
import { Task } from '@/types/Data'
import { useRef, useState, useCallback } from 'react'

const Root = () => {
  const ref = useRef<HTMLButtonElement>(null)

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      header: 'Hello',
      content: `${'Hello '.repeat(80)}`,
    },
  ])

  const updateTasks = useCallback(() => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        header: 'Hello',
        content: `${'Hello '.repeat(60)}`,
      },
    ])
  }, [setTasks])

  return (
    <div className="text-xl w-full flex flex-col items-center px-16 pt-8">
      <Button className="border-yellow-300" ref={ref} onClick={updateTasks}>
        <Text>Создать новый таск</Text>
      </Button>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default Root
