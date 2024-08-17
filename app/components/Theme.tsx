import { useEffect, useState } from "react"
import useTheme from "~/context/theme"

export default function Theme({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)
  const isDark = useTheme((state) => state.isDark)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`flex flex-col h-screen ${isDark ? "bg-gray-dark text-gray-light" : null }`}
    >
      {children}
    </div>
  )
}