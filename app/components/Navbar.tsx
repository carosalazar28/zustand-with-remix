import useAuth from "~/context/auth";
import Dropdown from "./ui/Dropdown";

export default function Navbar() {
  const hasToken = useAuth((state) => state.token)

  const handleLogout = useAuth((state) => state.logout)

  return (
    <nav className="flex justify-between px-4 py-4 bg-gray-dark text-green shadow-lg">
      <div className="container mx-auto">
        {hasToken ? (
          <>
            <a className="px-4" href="/">Home</a>
            <a className="px-4" href="/characters">Characters</a>
            <a className="px-4" href="/contact">Contact</a>
          </>
        ): null}
      </div>
      <div className="flex">
        {hasToken ? (
          <button className="px-4" onClick={handleLogout}>Logout</button>
        ) : (<a href="/register">Register</a>)}
        <p className="px-4">|</p>
        <Dropdown/>
      </div>
    </nav>
  )
}