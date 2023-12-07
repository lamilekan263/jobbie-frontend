

import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name: 'job',
    initialState: {
        job: [],
        message: ''
    },
    reducers: {
        getJobs: (state, action) => {
            state.job = action.payload.jobs
            // state.message = action.payload.message
        }

       
    }
})


const {actions,reducer} = jobSlice
export const { getJobs } = actions

export default reducer

