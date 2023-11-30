import { TaskInput, TaskStored } from '@/types/Data'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TaskStored[] = [
  {
    id: 1,
    header: 'hello',
    content: 'hello',
  },
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: { type: string; payload: TaskInput }) => {
      const newId = state[state.length - 1].id + 1
      state.push({ ...action.payload, id: newId })
    },
    removeTaskById: (
      state,
      action: { type: string; payload: { id: number } },
    ) => {
      const i = state.findIndex((task) => task.id === action.payload.id)
      state.splice(i, 1)
    },
    updateTaskById: (
      state,
      action: { type: string; payload: TaskInput & { id: number } },
    ) => {
      const i = state.findIndex((task) => task.id === action.payload.id)
      if (i == -1) {
        return
      }
      state[i].content = action.payload.content
      state[i].header = action.payload.header
    },
  },
})

type SliceActions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never
}[keyof T]

type ActionTypes = SliceActions<typeof taskSlice.actions>

export type { ActionTypes }
export const { addTask, removeTaskById, updateTaskById } = taskSlice.actions
export default taskSlice.reducer
