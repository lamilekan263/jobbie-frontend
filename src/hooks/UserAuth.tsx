
"use client"
import { useSelector } from 'react-redux'

const UserAuth = () => {

    const { token } = useSelector((state: any) => state.auth)
    if (token) return true;

    return false
}

export default UserAuth