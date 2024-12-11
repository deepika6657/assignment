import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0,
    //value : ''
 }

const navbarSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++
    },
    reset(state) {
      state.count=0
    },
    //setValue(state , payload) {
      //  state.value=payload.payload;
    //},
  },
})

export const { increment, reset , setValue} = navbarSlice.actions
export default navbarSlice.reducer