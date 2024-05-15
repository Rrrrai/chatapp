import React from "react";
import {User} from "@nextui-org/react";

export default function App() {
  return (
    <div className="border">
    <User   
      name="You"
      description="@1"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
    </div>
  );
}