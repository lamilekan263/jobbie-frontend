import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    token: '',
    message: '',
    user:''
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
     
        userRegistration: (state, action) => {
            state.token = '',
            state.message = action.payload.message
        },
        userLoggedIn: (state, action) => {
            state.token = action.payload.token,
            state.message = action.payload.message,
            state.user = action.payload.user
        },
        userLoggedOut: (state, action) =>{
            state.token = ''
            state.message = action.payload.message,
            state.user = ''
        },

       

    }
})


export const { userLoggedOut, userLoggedIn, userRegistration } = authSlice.actions

export default authSlice.reducer