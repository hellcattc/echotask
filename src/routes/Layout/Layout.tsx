import { Navbar } from '@/components/layout'
import { Outlet } from 'react-router-dom'
import useLocationMatch from '@/hooks/useLocationMatch'
import { ConstRoute } from '@/types/UI'

const pathsWithNoNavbar: ConstRoute[] = ['/']

const Layout = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shouldRenderNavbar = !useLocationMatch(pathsWithNoNavbar)

  return (
    <>
      <Navbar />
      <div className="text-xl w-full flex flex-col items-center px-16 pt-8">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
