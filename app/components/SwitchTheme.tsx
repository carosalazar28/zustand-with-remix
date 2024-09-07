import { MoonIcon, SunIcon, TvIcon } from '@heroicons/react/24/solid'

import useTheme from '~/context/theme'

import Dropdown from "./ui/Dropdown";


export function SwitchTheme() {
  const handleDarkTheme = useTheme(state => state.toggle)
  const handleLightTheme = useTheme(state => state.toggle)

  return (
    <Dropdown Icon={TvIcon} position='right'>
      <button
        className="block px-4 py-2"
        role="menuitem"
        onClick={() => handleDarkTheme(true)}
      >
        <MoonIcon className="size-6 text-gray"/>
      </button>
      <button
        className="block px-4 py-2"
        role="menuitem"
        onClick={() => handleLightTheme(false)}
      >
        <SunIcon className="size-6 text-yellow"/>
      </button>
    </Dropdown>
  )
}