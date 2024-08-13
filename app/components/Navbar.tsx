import useAuth from "~/context/auth";
import Dropdown from "./ui/Dropdown";

export default function Navbar() {
  const hasToken = useAuth((state) => state.token)
  return (
    <nav className="flex justify-between px-4 py-4 bg-gray-dark text-green shadow-lg">
      <div className="container mx-auto">
        <a className="px-4" href="/">Home</a>
        <a className="px-4" href="/about">About</a>
        <a className="px-4" href="/contact">Contact</a>
      </div>
      <div className="flex">
        {hasToken ? null : (<a href="/register">Register</a>)}
        <p className="px-4">|</p>
        <Dropdown/>
      </div>
    </nav>
  )
}