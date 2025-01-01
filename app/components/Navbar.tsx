import useAuth from "~/context/auth";
import { isMobile } from "~/utils/device";
import { SwitchTheme } from "./SwitchTheme";
import { SwitchNav } from "./SwitchNav";
import { NavItem } from "./ui/NavItem";

const routes = [
  {
    href: '/',
    label: 'Home',
    id: 'home'
  },
  {
    href: '/characters',
    label: 'Characters',
    id: 'characters'
  },
  {
    href: '/contact',
    label: 'Contact',
    id: 'contact'
  }
]

export default function Navbar() {
  const mobile = isMobile()
  const hasToken = useAuth((state) => state.token)

  const handleLogout = useAuth((state) => state.logout)

  return (
    <nav className="flex justify-between px-4 py-4 bg-gray-dark text-green shadow-lg">
      <div className="container mx-auto">
        {hasToken ? (
          <>
            {
              mobile 
              ? (
                <SwitchNav items={routes} />
              ) 
              : (
                <>
                  <NavItem device="desktop" href="/" label="Home"/>
                  <NavItem device="desktop" href="/characters" label="Characters" />
                  <NavItem device="desktop" href="/planets" label="Planets" />
                </>
              )
            }
          </>
        ): null}
      </div>
      <div className="flex">
        {hasToken ? (
          <button className="px-4" onClick={handleLogout}>Logout</button>
        ) : (<NavItem device="desktop" href="/register" label="Register"/>)}
        <p className="px-4">|</p>
        <SwitchTheme />
      </div>
    </nav>
  )
}