'use client'
import FriendBar from '@/component/friendBar/page'
import MessageBar from '@/component/messageScreen/page'
import TopBar from '@/component/navbar/page'
import PersonalID from '@/component/personalID/page'
import TypingBar from '@/component/typingBar/page'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen w-screen bg-grey-500'>
        <div className='w-[15%] bg-gray-600'>
        <PersonalID/>    
        <FriendBar/>
        </div>
        <div className='w-[80%]'>
        <TopBar/>
        <MessageBar/>
        <TypingBar/>
        </div>
    </div>
  )
}

export default page