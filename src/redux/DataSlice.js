import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value : ''
}

const dataSlice = createSlice({
  name:'DataStore',
  initialState,
  reducers : {
  addUser(state , action){
   state.value=action.payload;
  }
  }

})

export const {addUser} = dataSlice.actions
export default dataSlice.reducer













