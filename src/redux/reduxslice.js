import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
     click : true,
     input:"kodungallur",
     data:"",
     units:"metric",
     unitval:"°C",
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
    unit:(state)=>{
     if(state.units==="metric"){
      state.units="imperial";
      state.unitval="°F";
     }
     else{
      state.units="metric";
      state.unitval = "°C";
     }
    },
  },
});


export const { unit,input,data,click } = reduxSlice.actions;


export default reduxSlice.reducer;