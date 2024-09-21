import { Bars3Icon } from "@heroicons/react/24/solid";

import Dropdown from "./ui/Dropdown";
import { NavItem } from "./ui/NavItem";

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
        <NavItem key={index} device="mobile" {...item} />
      ))}
    </Dropdown>
  )
}