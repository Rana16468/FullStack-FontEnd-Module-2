import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type countType={
    count:number
}
const initialState:countType={count:0}
export const counterSlice = createSlice({
    name: 'counter',
   initialState,
   reducers:{

    increment:(state)=>{
        state.count=state.count >=0?state.count +1 :0
    },
    decrement:(state)=>{
        state.count=state.count<=0?0:state.count-1
    },
    IncrementByValue:(state,action:PayloadAction<number>)=>{

        state.count=state.count+action.payload
    }
    
   }

});

export const { increment, decrement ,IncrementByValue} = counterSlice.actions;
export default counterSlice.reducer;

