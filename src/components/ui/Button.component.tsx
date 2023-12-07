'use client'
import React from 'react'


type Props = {
    text: string
}
const ButtonComponent: React.FC<Props> = ({ text, ...props }) => {
    return (
        <button {...props} type='submit' className={`w-full p-3 text-white mt-3 text-center bg-black rounded-lg  hover:bg-gray-700`}>{text}</button>
    )
}

export default ButtonComponent