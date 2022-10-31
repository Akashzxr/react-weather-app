import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
     lat:0,
     long:0,
}

export const reduxSlice = createSlice({
  name: "redux",
  initialState: INITIAL_STATE,
  reducers: {
    increment:(state)=>{
        state.count+=1;
    },
    latitude:(state,action)=>{
      state.lat=action.payload;
    },
  },
});


export const { increment,latitude } = reduxSlice.actions;


export default reduxSlice.reducer;