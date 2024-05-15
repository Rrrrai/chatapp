// 'use client'
// import React from 'react'

// const MessageBar = () => {
//     const loggedInUser = 1
//     const messages = [
//         {message:'hi k cha' ,sender: 1, members:[1,2]},
//         {message:'thik cha' ,sender: 2, members:[1,2]},
//         {message:'tero k cha' ,sender: 2, members:[1,2]},
//         {message:'same, ok bye' ,sender: 1, members:[1,2]},
//         {message:'bye' ,sender: 2, members:[1,2]}
//     ]
//   return (
//     <div className=''>
//             <strong>1</strong>
//             {
//                 messages.map((item)=>{
//                     if(item.sender === loggedInUser){
//                         return(
//                             <>
//                              <div className='bg-blue-500 p-2 m-2 w-[60%] rounded-lg ml-10'>{item.message}</div>
//                             </>
//                          )
//                     }else{
//                         return(
//                             <>
//                              <div className='bg-gray-200 p-2 m-2 w-[60%] rounded-lg '>{item.message}</div>
//                             </>
//                          )
//                     }
//                 })
//             }
//     </div>
//   )
// }
// export default MessageBar