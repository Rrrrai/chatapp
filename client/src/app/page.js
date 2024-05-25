'use client'
import React from "react";
import {Button, Input} from "@nextui-org/react";
import { EyeFilledIcon } from "@/component/eyeFilliedIcon/page";
import { EyeSlashFilledIcon } from "@/component/eyeSlashFilledIcon/page";
import Link from "next/link";

export default function App() {
  const [value, setValue] = React.useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="flex justify-center py-36 bg-black">
    <div className="flex bg-gray-900 w-max p-24">
  <div >
  <Input
      value={value}
      isRequired
      type="email"
      label="Email"
      placeholder="Enter your email"
      size={"lg"}
      variant="bordered"
      isInvalid={isInvalid}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="max-w-xs text-white"

    />
      <Input
      label="Password"
      variant="bordered"
      isRequired
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
    </div>
  );
}
