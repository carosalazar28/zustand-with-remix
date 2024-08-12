import { MoonIcon, SunIcon, TvIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

import useTheme from '~/context/theme'

export default function Dropdown() {
  const [open, setOpen] = useState(false)
  const handleDarkTheme = useTheme(state => state.toggle)
  const handleLightTheme = useTheme(state => state.toggle)

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          <TvIcon className="size-6 text-gray-light" />
        </button>
      </div>
      {open ? (
        <div className="absolute right-0 z-10 mt-2 rounded-md origin-top-right bg-gray-dark shadow-lg focus:outline-none" role="menu">
        <div className="py-1">
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
        </div>
      </div>
      ) : null}
    </div>
  )
}