import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
     click : true,
     input:"kodungallur",
     data:"",
}

export const reduxSlice = createSlice({
  name: "redux",
  initialState: INITIAL_STATE,
  reducers: {
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


export const { input,data,click } = reduxSlice.actions;


export default reduxSlice.reducer;