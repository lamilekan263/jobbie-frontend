
import React from 'react'
import { ModeToggle } from '@/components/Theme-toggle'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button, buttonVariants } from './ui/button'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { LucideUser } from 'lucide-react'
import { useLogOutMutation } from '@/redux/features/auth/authApi'

const Header = () => {
    const { user } = useSelector((state: any) => state.auth)
    const [logOut] = useLogOutMutation({})
    
    const handleLogOut = async () => {
        await logOut('')
    }
    return (
      <div className='flex items-center justify-between  py-3 px-4'>
        <Link href={'/'}>
          <h1 className='text-4xl font-extrabold'>Jobber</h1>
        </Link>

        {/* <DropdownMenuDemo /> */}
        <div className='flex gap-3'>
          <ModeToggle />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                  <AvatarFallback>
                    <LucideUser />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuLabel>
                  <p className='text-gray-400 font-extralight text-xs '>
                    {user.email}
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogOut}
                  className='text-red-900 hover:text-red-900'
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              variant={'default'}
              className='font-light text-lg bg-primary rounded-2xl border border-black text-black hover:bg-black hover:text-primary dark:bg-primary'
            >
              <Link href='/auth/login'>Try it Out</Link>
            </Button>
          )}
        </div>
      </div>
    )
}

export default Header