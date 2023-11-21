import { ITask } from '@/types/Data'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ITask[] = [
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
    addTask: (state, action: { type: string; payload: ITask }) => {
      state.push(action.payload)
    },
    removeTaskById: (state, action) => {
      const i = state.findIndex((task) => task.id === action.payload.id)
      state.splice(i, 1)
    },
    updateTaskById: (state, action) => {
      const i = state.findIndex((task) => task.id === action.payload.id)
      const task = { ...state[i] }
      task.header = action.payload.header
      task.content = action.payload.content
      state.splice(i, 1, task)
    },
  },
})

export const { addTask, removeTaskById, updateTaskById } = taskSlice.actions
export default taskSlice.reducer
