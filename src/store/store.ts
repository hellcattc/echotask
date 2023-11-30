import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice'

const store = configureStore({
  reducer: { taskReducer },
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>
type Actions = Parameters<AppDispatch>

export type { RootState }
export type { AppDispatch }
export type { Actions }
export default store
