import { createSlice } from "@reduxjs/toolkit"
 
 
const initialState = {
    messageSend:''
}
 
const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers:{
    }
})
 
export const {} = messageSlice.actions
export default messageSlice.reducer