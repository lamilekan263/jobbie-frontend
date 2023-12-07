'use client'
import Image from 'next/image'
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
    <div className='h-screen bg-black text-white'>
      <h1>hellow</h1>
    </div>
  )
}

