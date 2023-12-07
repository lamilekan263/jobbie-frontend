"use client"
import React from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';


type Props = {
    label: string;
    type: string;
    id: string;
    // name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
    touched: any;
    error?: string;

}
const InputComponent: React.FC<Props> = ({ label,
    type,
    id,
    // name,
    onChange,
    onBlur,
    value,
    touched,
    error }) => {

    return (
        <div className='flex flex-col flex-1 space-y-2 my-3'>
            <Label htmlFor={id} className='text-md'>{label}</Label>
            <Input className={`flex-1 p-3 bg-[#f3f4f6] dark:bg-gray-700 text-sm ${error && touched ? `border border-red-900` : 'border-0'} focus:outline focus:outline-black rounded-lg`}
                type={type}
                // name={name}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && touched && (
                <span className="text-red-500">{error}</span>
            )}
        </div>
    )
}

export default InputComponent