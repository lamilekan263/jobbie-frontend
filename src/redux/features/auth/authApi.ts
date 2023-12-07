import { apiSlice } from '../api/apiSlice'
import { userLoggedIn, userLoggedOut, userRegistration } from './authSlice'

type RegistrationResponse = {
  message: string
}

type RegistrationData = {}

type LoginResponse = {
  message: string
  token: string
  user: any
}

type LoginData = {}

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: data => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: data,
        credentials: 'include' as const
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled
          dispatch(userRegistration({ message: result.data.message }))
        } catch (error: any) {
          dispatch(userRegistration({ message: error.error.data.message }))
        }
      }
    }),
    login: builder.mutation<LoginResponse, LoginData>({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
        credentials: 'include' as const
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled
          dispatch(
            userLoggedIn({ token: result.data.token, user: result.data.user })
          )
        } catch (error: any) {
          dispatch(userLoggedIn({ message: error.error.data.message }))
        }
      }
    }),
    logOut: builder.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
        credentials: 'include' as const
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedOut({ message: result.data.message }))
        } catch (error) {
          console.log(error)
        }
      }
    })
  }),
  overrideExisting: true
})

export const { useRegisterMutation, useLoginMutation, useLogOutMutation } = authApi
