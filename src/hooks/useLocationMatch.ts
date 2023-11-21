import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

const useLocationMatch = (match: string[] | string) => {
  const location = useLocation()
  return useMemo(() => {
    return Array.isArray(match)
      ? match.some((url) => location.pathname.includes(url))
      : location.pathname.includes(match)
  }, [location, match])
}

export default useLocationMatch
