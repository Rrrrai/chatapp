import React from 'react'
import {Input} from "@nextui-org/react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
const TypingBar = () => {
  return (
    <div className='flex ' >
       <Input
          placeholder="Enter Your Message"
          endContent={
            <HiOutlinePaperAirplane/>
          }
        />
    </div>
  )
}

export default TypingBar