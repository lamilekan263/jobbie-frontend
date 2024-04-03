'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const { user } = useSelector((state: any) => state.auth)

  useEffect(() => {
    if (user) {
      redirect('/application')
    }
  }, [user])
  return (
    <div className='h-screen'>
      <div className='px-4 flex flex-col text-center items-center justify-center h-full gap-4'>
        <h1 className='text-4xl'> Hey, Welcome to <span className='text-primary font-extrabold'>Jobber</span> </h1>
        <p className='text-normal'>A place where we help you keep track of your job applications</p>
         <Button
              asChild
              variant={'default'}
              className='font-light text-lg bg-primary rounded-2xl border border-black text-black hover:bg-black hover:text-primary dark:bg-primary'
            >
              <Link href='/auth/login'>Try it Out</Link>
            </Button>
      </div>
    </div>
  )
}

