'use client'
import {
  LucideAlertCircle,
  LucideBuilding2,
  LucideCalendarCheck,
  LucideLink,
  LucideTrash2,
  LucideUser
} from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { DatePicker } from './date-picker'
import DeleteJob from './DeleteJob'
import EditInput from './EditInput'
import SelectStatus from './SelectStatus'

type Job = {
  _id: string
  company: string
  role: string
  description: string
  appliedDate: Date
  status: 'interviewing' | 'applied' | 'hired' | 'rejected' | 'closed'
}

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: 'company',
    header: ({ column }) => {
      return (
        <div className='flex  gap-2'>
          <LucideBuilding2 size={18} />
          <p>Company</p>
        </div>
      )
    },
    cell: ({ row }) => {
      return <EditInput row={row} name={'company'} />
    }
  },
  {
    accessorKey: 'role',
    header: ({ column }) => {
      return (
        <div className='flex  gap-2'>
          <LucideUser size={18} />
          <p>Role</p>
        </div>
      )
    },
    cell: ({ row }) => {
      return <EditInput row={row} name={'role'} />
    }
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return (
        <div className='flex  gap-2'>
          <LucideLink size={18} />
          <p>Description</p>
        </div>
      )
    },
    cell: ({ row }) => {
      return <EditInput row={row} name={'description'} />
    }
  },
  {
    accessorKey: 'appliedDate',
    header: ({ column }) => {
      return (
        <div className='flex  gap-2'>
          <LucideCalendarCheck size={18} />
          <p>Applied Date</p>
        </div>
      )
    },
    cell: ({ row }) => {
      return <DatePicker row={row} />
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div className='flex  gap-2'>
          <LucideAlertCircle size={18} />
          <p>Status</p>
        </div>
      )
    },
    cell: ({ row }) => <SelectStatus row={row} />
  },
  {
    accessorKey: 'delete',
    header: ({ column }) => {
      return <div />
    },
    cell: ({ row }) => <DeleteJob row={row} />
  }
]
