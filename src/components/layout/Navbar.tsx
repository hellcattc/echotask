import { Link } from 'react-router-dom'
import { Text } from '../UI'
import ROUTES from '@/types/Routes'

const Navbar = () => {
  return (
    <header className="flex items-center h-20 mx-8">
      <Link to={ROUTES.INDEX.path}>
        <Text className="pl-4 text-3xl p-0 m-0 align-middle pb-1">
          Task Manager
        </Text>
      </Link>
      <Link to={ROUTES.CREATE_TEMPLATE.path} className="p-0">
        <Text className="pl-10 text-2xl h-fit align-middle">
          Создать расписание
        </Text>
      </Link>
    </header>
  )
}

export default Navbar
