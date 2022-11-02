import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
     click : true,
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
    },
    longtitude:(state,action)=>{
      state.long=action.payload;
    },
    input:(state,action)=>{
     state.input=action.payload;
    },
    data:(state,action)=>{
      state.data=action.payload;
    },
    click:(state,action)=>{
      state.click=action.payload;
    },
  },
});


export const { latitude,longtitude,input,data,click } = reduxSlice.actions;


export default reduxSlice.reducer;