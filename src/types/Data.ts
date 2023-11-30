type TaskInput = {
  header: string | undefined
  content: string | undefined
}

type TaskStored = {
  id: number
  header: string | undefined
  content: string | undefined
}

export type { TaskInput, TaskStored }
