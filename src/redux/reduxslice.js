import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
    data:null,
}

export const reduxSlice = createSlice({
  name: "redux",
  initialState: INITIAL_STATE,
  reducers: {
    increment:(state)=>{
        state.count+=1;
    },
    
  },
});


export const { increment } = reduxSlice.actions;


export default reduxSlice.reducer;