'use client'
import { Button } from '@/components/ui/button'
import { useDeleteJobMutation } from '@/redux/features/job/jobApi'
import { LucideTrash2 } from 'lucide-react'
import React from 'react'

const DeleteJob = ({ row }: any) => {
  const [deleteJob, { isLoading, isSuccess }] = useDeleteJobMutation()

  const { _id } = row.original

  return (
    <Button onClick={() => deleteJob({ id: _id })}>
      <LucideTrash2 className='cursor-pointer' />
    </Button>
  )
}

export default DeleteJob
