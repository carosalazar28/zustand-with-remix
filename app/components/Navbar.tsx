import useAuth from "~/context/auth";
import { SwitchTheme } from "./SwitchTheme";
import { SwitchNav } from "./SwitchNav";

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

function getMediaQuery(query) {
  let mediaQueryList
  if (typeof window !== "undefined") {
    mediaQueryList = window.matchMedia(query);
    return mediaQueryList.matches;
  }
  return true
}

export default function Navbar() {
  const isMobile = getMediaQuery('(max-width: 768px)');
  const hasToken = useAuth((state) => state.token)

  const handleLogout = useAuth((state) => state.logout)

  return (
    <nav className="flex justify-between px-4 py-4 bg-gray-dark text-green shadow-lg">
      <div className="container mx-auto">
        {hasToken ? (
          <>
            {
              isMobile 
              ? (
                <SwitchNav items={routes} />
              ) 
              : (
                <>
                  <a className="px-4" href="/">Home</a>
                  <a className="px-4" href="/characters">Characters</a>
                  <a className="px-4" href="/contact">Contact</a>
                </>
              )
            }
          </>
        ): null}
      </div>
      <div className="flex">
        {hasToken ? (
          <button className="px-4" onClick={handleLogout}>Logout</button>
        ) : (<a href="/register">Register</a>)}
        <p className="px-4">|</p>
        <SwitchTheme />
      </div>
    </nav>
  )
}