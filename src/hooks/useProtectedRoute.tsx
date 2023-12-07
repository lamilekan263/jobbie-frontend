"use client"
import React, { FC } from 'react'
import UserAuth from './UserAuth'
import { redirect } from 'next/navigation';

interface Props {
    children: React.ReactNode
}

const Protected: FC<Props> = ({ children }) => {
    const isAunthenticated = UserAuth();
    return isAunthenticated ? children : redirect('/auth/login')
}

export default Protected