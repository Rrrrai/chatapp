import { createSlice } from "@reduxjs/toolkit"
 
 
const initialState = {
    
    isLoggedIn: false,
    id: ''
}
 
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        loggedIn(state, payload){
            state.isLoggedIn = true
            return state
        },
        idLogin(state, payload){
            state.id = ''
            return state
        }
    }
})
 
export const { loggedIn, idLogin } = userSlice.actions
export default userSlice.reducer