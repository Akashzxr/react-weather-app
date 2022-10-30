import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from './reduxslice'

export const store = configureStore({
  reducer: {
    redux:reduxReducer,
  },
})