'use client'
import React from "react";
import {Button, Input} from "@nextui-org/react";
import { EyeFilledIcon } from "@/component/eyeFilliedIcon/page";
import { EyeSlashFilledIcon } from "@/component/eyeSlashFilledIcon/page";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
    .min(10, '*Too Short!')
    .max(20, '*Too Long!')
      .required('*Required'),
      email: Yup.string()
      .min(2, '*Too Short!')
      .max(50, '*Too Long!')
      .required('*Required'),
      password: Yup.string()
      .min(8, '*Password must be 8 characters or more!')
      .max(50, 'Too Long!').required('*Required'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], '*Passwords do not match'),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      registerUser(values)
    },
  });

  const registerUser =async (values) => {
    try{
      const res=  await fetch('http://localhost:8000/register',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      toast(data.msg)
    }catch(err){
      toast(err);
    }
  
   }

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="flex justify-center py-36 h-max bg-black">
    <div className="flex bg-gray-900 w-max p-24">
  <div >
  <Input 
    id="userName" 
    name="userName" 
    type="text" 
    label="User Name" 
    onChange={formik.handleChange} 
    value={formik.values.userName} 
    variant="bordered" 
    className="text-white"/>
    <div className='text-red-500 text-small'>{formik.touched.userName && formik.errors?.userName}</div>
  <Input
      id="email"
      name="email"
      type="email"
      label="Email"
      onChange={formik.handleChange}
      value={formik.values.email}
      placeholder="Enter your email"
      variant="bordered"
      className="max-w-xs text-white"
    />
    <div className='text-red-500 text-small'>{formik.touched.email && formik.errors?.email}</div>
      <Input
      id="password"
      name="password"
      onChange={formik.handleChange}
      value={formik.values.password}
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs text-white"
    />
    <div className='text-red-500 text-small'>{formik.touched.password && formik.errors?.password}</div>

      <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-2">
      Continue
    </Button>
    <br/>
    <span className="text-white">Already have an account?<span className="text-blue-700"><a href="/">Log In</a></span></span>
  </div>
    </div>
    </div>
       </form>
  );
}