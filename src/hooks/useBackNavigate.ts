import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useBackNavigate = () => {
  const navigate = useNavigate()
  return useCallback(() => {
    navigate(-1)
  }, [navigate])
}

export default useBackNavigate
