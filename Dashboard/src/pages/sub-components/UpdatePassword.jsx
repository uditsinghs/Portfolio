import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from 'react-router-dom'
import { clearAllErrors, updatePassword } from "../../slices/userSlice"
import { toast } from "react-toastify"

const UpdatePassword = () => {
  // const naviagte = useNavigate()
  const dispatch = useDispatch()
  const { error, message } = useSelector((state) => state.user)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const handleChangePassword = () => {
    dispatch(updatePassword(password, newPassword, confirmNewPassword))
    dispatch(clearAllErrors())
    setConfirmNewPassword("")
    setNewPassword('')
    setPassword('')
    // naviagte('')
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (message) {
      toast.success(message)
    }
  }, [error, message])
  return (
    <div className="h-screen w-full  flex mt-20">
      <div className=" flex flex-col gap-4  ">
        <div className="text-xl flex gap-5 ">
          <label className="font-bold">Enter Password :</label>
          <input type="password" placeholder="Enter password" className="text-zinc-800 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password} />
        </div>
        <div className="text-xl flex gap-5 ">
          <label className="font-bold"> New Password :</label>
          <input type="password" placeholder="Enter password" className="text-zinc-800 outline-none"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword} />
        </div>
        <div className="text-xl flex gap-5 ">
          <label className="font-bold">Confirm Password :</label>
          <input type="password" placeholder="Enter password" className="text-zinc-800 outline-none"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            value={confirmNewPassword} />
        </div>
        <button type="submit" onClick={handleChangePassword} className="bg-red-500 py-2 px-4 text-white">Change Password</button>
      </div>
    </div>
  )
}

export default UpdatePassword