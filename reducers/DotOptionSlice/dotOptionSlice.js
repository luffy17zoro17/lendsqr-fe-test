import {createSlice} from "@reduxjs/toolkit";



const initialState = {
      value:false
}


const DotOptionSlice = createSlice({
      
      name:"threeDots",
      initialState,
      reducers:{
         openBox:(state)=>{
            if(state.value === false){
            state.value = true;
            } else {
              state.value = false;     
            }
         }
      }
});


export const selectDot = state => state?.threeDots?.value; 

export const {openBox} = DotOptionSlice.actions;


export default DotOptionSlice.reducer;