import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useBackNavigate = () => {
  const navigate = useNavigate()
  return useCallback(() => {
    console.log('navigating back')
    navigate(-1)
  }, [navigate])
}

export default useBackNavigate
