import { useDispatch, useSelector } from "react-redux"
import { clearAllErrors, logoutUser } from "../slices/userSlice"
import { useEffect } from "react"
import { toast } from "react-toastify"


const HomePage = () => {
  const { error, message } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearAllErrors())
    }
    if (message) {
      toast.success(message)
    }
  }, [])
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage