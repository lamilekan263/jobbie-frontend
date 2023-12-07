import { Input } from '@/components/ui/input'
import { useEditJobMutation } from '@/redux/features/job/jobApi'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'

const EditInput = ({ row, name }: any) => {
  const [inputValue, setInputValue] = useState(row.original[name])
  const { _id } = row?.original || {}
  const [editJob] = useEditJobMutation()

  const edit = async (inputValue: any) => {
    await editJob({ id: _id, [name]: inputValue })
  }

 
  const debouncedEdit = _.debounce(edit, 500) 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)


    debouncedEdit(newValue)
  }

  return (
    <Input
      className='text-xs md:text-sm font-extralight'
      type='text'
      id={name}
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}

export default EditInput
