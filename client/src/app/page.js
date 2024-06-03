'use client'
import React from "react";
import {Button, Input} from "@nextui-org/react";
import { EyeFilledIcon } from "@/component/eyeFilliedIcon/page";
import { EyeSlashFilledIcon } from "@/component/eyeSlashFilledIcon/page";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function App() {
  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string()
    .required("*Cannot be empty")
    ,

    password: Yup.string()
    .min(3,'Invalid password')
    .max(50, 'Invalid Password')
    .required('*Cannot be empty')
  });

  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    
    },

    validationSchema:SignupSchema,
    onSubmit: values => {
    loginUser(values)
    },
  });


  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="bg-black h-screen flex items-center justify-center p-10">
    <div className="bg-gray-900 w-max p-24">
  <Input
      id="email"  
      type="email"
      label="Email"
      placeholder="Enter your email"
      onChange={formik.handleChange}
      value={formik.values.email}
      size={"lg"}
      variant="bordered"
      className="max-w-xs text-white"
    />
      <Input
      id = "password"
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
      <Button as={Link} href="/home" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-2">
      Login
    </Button>
    <br/>
    <span className="text-white">Need an account?<span className="text-blue-700"><a href="/register">Sign Up</a></span></span>  
    </div>
    </div>
  );
}
