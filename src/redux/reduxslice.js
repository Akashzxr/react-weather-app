import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
     lat:0,
     long:0,
     input:"kodungallur",
}

export const reduxSlice = createSlice({
  name: "redux",
  initialState: INITIAL_STATE,
  reducers: {
    latitude:(state,action)=>{
      state.lat=action.payload;
    },
    longtitude:(state,action)=>{
      state.long=action.payload;
    },
    input:(state,action)=>{
     state.input=action.payload;
    },
  },
});


export const { latitude,longtitude,input } = reduxSlice.actions;


export default reduxSlice.reducer;