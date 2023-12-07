'use client'

/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import InputComponent from '@/components/form/Input.component'
import { useLoginMutation } from '@/redux/features/auth/authApi'

import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email address')
    .email('Invalid email address'),
  password: Yup.string().required('Please enter your password').min(5)
})

const Login = () => {
  const [login, { isLoading, isSuccess }] = useLoginMutation()

  const { user } = useSelector((state: any) => state.auth)
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: schema,
    onSubmit: async values => {
      await login(values)
    }
  })

 

  useEffect(() => {
    if (user) {
      redirect('/application')
    }
  }, [user])

  const { errors, touched, values, handleBlur, handleChange, handleSubmit } =
    formik
  return (
    <div className='h-screen  '>
      <div className='h-full relative rounded-full flex'>
        <div className="hidden lg:block  flex-1 bg-[url('https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=800')]"></div>
        <div className='flex-1  flex  justify-center items-center mx-auto '>
          <div className='flex-1 px-4 md:px-20'>
            <div className='text-center'>
              <h1 className=' font-bold text-2xl'>Welcome back </h1>
              <h1 className=' font-light my-2'>Log into your account </h1>
            </div>
            {/* email */}
            <form onSubmit={handleSubmit}>
              <InputComponent
                label='Email'
                id='email'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.email}
                value={values.email}
                error={errors.email}
              />
              <InputComponent
                label='Password'
                id='password'
                type='password'
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.password}
                value={values.password}
                error={errors.password}
              />
              <Button className='w-full text-primary dark:bg-primary dark:text-black'>
                {isLoading ? 'Loading' : 'Login'}
              </Button>
            </form>
            <p className='text-center mt-4 font-light'>
              {' '}
              Don't have an account?{' '}
              <Link href='/auth/signup' className='font-bold'>
                -Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
