import { Button, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
<div className="flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
            <Image src="instantlogo.png" alt="logo" className='w-20 mx-40' />
            <h2 className="text-center text-3xl font-extrabold">
            Sign Up
          </h2>
            <Input name="Username" type="text" label = "Username" variant="underlined" className="w-full m-4" placeholder="Username" />
            <Input name="email" type="email" label = "Email" variant="underlined" className="w-full m-4" placeholder="Enter email" />
            <Input name="password" type="password" label = "Password" variant="underlined" className="w-full m-4" placeholder="Enter password" />
            <Input name="cpassword" type="password" label = "Confirm Password" variant="underlined" className="w-full m-4" placeholder="Enter confirm password" />
            <Button type="button" className="w-full bg-blue-500 text-white"> Create an account </Button>
          <p className="text-sm m-2 text-center">Already have an account? <a as={Link} href="/test3" className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
      </div>
    </div>
  )
}

export default page