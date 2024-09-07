import { Bars3Icon } from "@heroicons/react/24/solid";

import Dropdown from "./ui/Dropdown";

interface Props {
  items: {
    label: string;
    href: string;
  }[];
}

export function SwitchNav({ items }: Props) {
  return (
    <Dropdown Icon={Bars3Icon} position="left">
      {items.map((item, index) => (
        <a key={index} className="px-4 py-2 block" href={item.href}>{item.label}</a>
      ))}
    </Dropdown>
  )
}