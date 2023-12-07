import { getToken } from "@/lib/getToken";
import { apiSlice } from "../api/apiSlice";
import { getJobs } from "./jobSlice";


export const jobApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        jobs: builder.query({
            query: () => ({
                url: '/jobs',
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                    'Content-Type': 'application/json'
                }
            }),
            providesTags:['Job'],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
               try {
                   const result = await queryFulfilled;
                   dispatch(getJobs({jobs:result.data.job}))
               } catch (error: any) { 
                    dispatch(getJobs({message:error.data.data.message}))
               }
           }
        }),
        addJob: builder.mutation({
            query: () => ({
                url: '/jobs',
                method:'POST',
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                    'Content-Type':'application/json'
                },
            }),
            invalidatesTags:['Job'],
           async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled
                    console.log(result)
                //    dispatch(getJobs({jobs:result}))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        deleteJob: builder.mutation({
            query: ({id}) => ({
                url: `/jobs/${id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags:['Job'],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        editJob: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/jobs/${id}`,
                method:"PATCH",
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                    'Content-Type': 'application/json'
                },
                body
            }),
            invalidatesTags:['Job'],
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const result = await queryFulfilled;
                    console.log(result)
            
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})


export const { useJobsQuery, useAddJobMutation,useDeleteJobMutation, useEditJobMutation } = jobApi