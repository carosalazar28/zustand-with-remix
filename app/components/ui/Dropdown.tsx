import React, { useState } from 'react'

interface Props {
  Icon: React.ElementType
  children: React.ReactNode
  position: 'right' | 'left'
}

enum StylePosition {
  'right' = 'right-0',
  'left' = 'left-0'
}

export default function Dropdown({ Icon, position, children }: Props) {
  const [open, setOpen] = useState(false)
  const stylePosition = StylePosition[position]
  const classContent = `absolute ${stylePosition} z-10 mt-2 rounded-md origin-top-right bg-gray-dark shadow-lg focus:outline-none`

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          <Icon className="size-6 text-gray-light"/>
        </button>
      </div>
      {open ? (
        <div className={classContent} role="menu">
        <div className="py-1">
          {children}
        </div>
      </div>
      ) : null}
    </div>
  )
}