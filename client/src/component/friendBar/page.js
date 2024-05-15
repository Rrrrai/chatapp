'use client'
import React from "react";
import { Listbox, ListboxItem, Avatar } from "@nextui-org/react";
import { Users } from "@/component/userList/page";
import { ListboxWrapper } from "@/component/listboxWrapper/page";

export default function FriendBar() {
  const [values, setValues] = React.useState(new Set(["1"]));

  return (
    <ListboxWrapper>
      <Listbox
        classNames={{
          base: "max-w-xs",
          list: "max-h-[300px] overflow-scroll",
        }}
        items={Users}
        variant="flat"
      >
        {(item) => (
          <ListboxItem key={item.id} textValue={item.name}>
            <div className="flex gap-2 items-center">
              <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.photo} />
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}
