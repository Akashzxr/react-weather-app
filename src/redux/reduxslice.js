import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
     lat:10.2167,
     long:76.2167,
     input:"kodungallur",
     data:"",
}

export const reduxSlice = createSlice({
  name: "redux",
  initialState: INITIAL_STATE,
  reducers: {
    latitude:(state,action)=>{
      state.lat=action.payload;
      console.log(state.lat);
    },
    longtitude:(state,action)=>{
      state.long=action.payload;
      console.log(state.long);
    },
    input:(state,action)=>{
     state.input=action.payload;
    },
    data:(state,action)=>{
      state.data=action.payload;
    }
  },
});


export const { latitude,longtitude,input,data } = reduxSlice.actions;


export default reduxSlice.reducer;