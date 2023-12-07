'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import ButtonComponent from '@/components/ui/Button.component'
import InputComponent from '@/components/form/Input.component'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRegisterMutation } from '@/redux/features/auth/authApi'
import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'

const schema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter password').min(5)
})
const SignUp = () => {
  const [register, { isLoading }] = useRegisterMutation()
  const { message } = useSelector((state: any) => state.auth)
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = { name, email, password }
      await register(data)
    }
  })

  useEffect(() => {
    if (message) {
      console.log(message)
    }
  }, [message])
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik
  return (
    <div className='h-screen '>
      <div className='h-full relative rounded-full flex'>
        <div className="hidden lg:block  flex-1 bg-[url('https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=800')]"></div>
        <div className='flex-1  flex  justify-center items-center mx-auto '>
          <div className='flex-1 px-4 md:px-20'>
            <h1 className='text-center font-bold text-2xl'>
              Create an Account{' '}
            </h1>
            <h1 className='text-center font-light my-2'>
              Enter your email below to create your account{' '}
            </h1>
            <form onSubmit={handleSubmit}>
              {/* name */}
              <InputComponent
                label='Name'
                type='text'
                id='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                touched={touched.name}
                error={errors.name}
              />
              {/* email */}
              <InputComponent
                label='Email'
                type='text'
                id='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                touched={touched.email}
                error={errors.email}
              />
              {/* password */}
              <InputComponent
                label='Password'
                type='password'
                id='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                touched={touched.password}
                error={errors.password}
              />
              <Button className='w-full text-primary dark:bg-primary dark:text-black'>
                {isLoading ? 'Loading...' : 'Sign Up'}
              </Button>
              <p className='text-center mt-4 font-light'>
                I already have an account{' '}
                <Link href='/auth/login' className='font-bold'>
                  - Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
