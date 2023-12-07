'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useAddJobMutation, useJobsQuery } from '@/redux/features/job/jobApi'
import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'
import { LucidePlus } from 'lucide-react'
import { useEffect } from 'react'
import { useLogOutMutation } from '@/redux/features/auth/authApi'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
}

export function DataTable<TData, TValue>({
  columns
}: DataTableProps<TData, TValue>) {
  const { token } = useSelector((state: any) => state.auth)
  const { isLoading, data, error, isFetching } = useJobsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true
    }
  )

  const { job, message } = data || {}

  const [addJob] = useAddJobMutation()



  const table = useReactTable({
    data: job,
    columns,
    getCoreRowModel: getCoreRowModel()
  })



  if (isLoading && isFetching) return <h1>Loading...</h1>

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='border-t py-3'>
        <Button
          className='rounded-b-md'
          variant={'ghost'}
          onClick={() => addJob({ token })}
        >
          <LucidePlus className='mr-2 h-4 w-4' />
          New
        </Button>
      </div>
    </div>
  )
}

// useAddJobMutation
