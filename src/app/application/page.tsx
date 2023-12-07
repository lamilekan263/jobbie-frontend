import Protected from '@/hooks/useProtectedRoute'
import React from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

const JobsList = async () => {
  return (
    <Protected>
      <div className='my-3'>
        <h1 className='font-bold text-lg pl-4 mb-4'>Applications</h1>
        <DataTable columns={columns} />
      </div>
    </Protected>
  )
}

export default JobsList
