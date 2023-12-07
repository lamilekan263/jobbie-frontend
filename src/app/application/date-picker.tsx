'use client'

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useEditJobMutation } from '@/redux/features/job/jobApi'

export function DatePicker({ row }: any) {
  const { _id, appliedDate } = row?.original || {}

  const [editJob] = useEditJobMutation()

  const handleChange = async (e: any) => {
    await editJob({ id: _id, appliedDate: e })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left text-xs md:text-sm font-normal',
            !appliedDate && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {appliedDate ? appliedDate : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={appliedDate}
          onSelect={handleChange}
          initialFocus
          className='text-xs  font-extralight'
        />
      </PopoverContent>
    </Popover>
  )
}
