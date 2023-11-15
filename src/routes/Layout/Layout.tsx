import { Navbar } from '@/components/layout'
import { Outlet } from 'react-router-dom'
import useLocationMatch from '@/hooks/useLocationMatch'

const pathsWithNoNavbar = ['']

const Layout = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shouldRenderNavbar = !useLocationMatch(pathsWithNoNavbar)

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
