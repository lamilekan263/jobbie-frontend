import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useEditJobMutation } from '@/redux/features/job/jobApi'
import React from 'react'

function changeStyle(value: string) {
  switch (value) {
    case 'applied':
      return 'bg-blue-100 text-blue-900 dark:bg-blue-100 dark:text-blue-900 font-bold'
    case 'hired':
      return 'bg-green-100 text-green-900 dark:bg-green-100 dark:text-green-900 font-bold'
    case 'rejected':
      return 'bg-red-100 text-red-900 dark:bg-red-100 dark:text-red-900 font-bold'
    case 'closed':
      return 'bg-gray-100 text-black dark:bg-gray-100 dark:text-black font-bold'
    case 'interviewing':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-100 dark:text-orange-700 font-bold'
    default:
      return
  }
}

const SelectStatus = ({ row }: any) => {
  const [editJob] = useEditJobMutation()
  const handleChange = async (e: any) => {
    await editJob({ id: row.original._id, status: e })
  }
  return (
    <Select onValueChange={handleChange} value={`${row.original.status}`}>
      <SelectTrigger
        className={`w-[180px]  text-white font-bold ${changeStyle(
          row.original.status
        )}`}
      >
        <SelectValue placeholder={`${row.original.status}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='applied'>
          <span className='text-xs font-extralight'>APPLIED</span>
        </SelectItem>
        <SelectItem value='interviewing'>
          <span className='text-xs font-extralight'>INTERVIEWING</span>
        </SelectItem>
        <SelectItem value='hired'>
          {' '}
          <span className='text-xs font-extralight'>HIRED</span>
        </SelectItem>
        <SelectItem value='rejected'>
          {' '}
          <span className='text-xs font-extralight'>REJECTED</span>
        </SelectItem>
        <SelectItem value='closed'>
          {' '}
          <span className='text-xs font-extralight'>CLOSED</span>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectStatus
