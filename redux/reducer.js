import { createSlice } from "@reduxjs/toolkit";
const initialState={
    client :{toggleForm:false, sessionstate:false,username:undefined,deleteid:null}
}
export const ReducerSlice = createSlice({
    name:'summeriser',
    initialState,
    reducers:{
        toggleChangeAction :(state)=>{
            state.client.toggleForm = !state.client.toggleForm;
        },
        
        sessionstateAction:(state,action)=>{
            state.client.sessionstate= action.payload
        },
        usernameAction:(state,action)=>{
            state.client.username= action.payload
        }
    }
})

export const {toggleChangeAction ,updateAction,deleteAction,sessionstateAction,usernameAction} = ReducerSlice.actions
export default ReducerSlice.reducer