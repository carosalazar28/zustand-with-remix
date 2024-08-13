import useTheme from "~/context/theme"

export default function Theme({ children }: { children: React.ReactNode }) {
  const isDark = useTheme((state) => state.isDark)
  return (
    <div
      className={`flex flex-col h-screen ${isDark ? "bg-gray-dark text-purple" : null }`}
    >
      {children}
    </div>
  )
}