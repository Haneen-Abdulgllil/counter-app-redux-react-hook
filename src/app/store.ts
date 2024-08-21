
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import counterSlice from "../features/counter/counterSlice"
// ...
const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export default store