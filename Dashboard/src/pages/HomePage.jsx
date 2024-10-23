import { useDispatch, useSelector } from "react-redux";
import { clearAllErrors, logoutUser } from "../slices/userSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdAddchart } from "react-icons/md";
import { BiSolidAddToQueue } from "react-icons/bi";
import { HiUserPlus } from "react-icons/hi2";
import { MdOutlineAddAlarm } from "react-icons/md";
import { BiMessageRoundedAdd } from "react-icons/bi";
import Dashboard from './sub-components/Dashboard';
import AddProject from "./sub-components/AddProject";
import AddSkill from './sub-components/AddSkill'
import AddApplication from './sub-components/AddApplication'
import AddTimeline from './sub-components/AddTimeline'
import Account from './sub-components/Account'
import Message from './sub-components/Message'

const HomePage = () => {
  const { error, message, isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [active, setActive] = useState("Dashboard"); // Track active component
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // Effect to handle errors, authentication, and messages
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllErrors());
    }
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (message) {
      toast.success(message);
    }
  }, [isAuthenticated, error, message]);

  return (
    <>
      <div className="flex w-full h-full bg-muted/40">
        {/* Sidebar toggle button for small screens */}
        <div className="lg:hidden">
          <button
            className="p-2 text-white bg-gray-800 fixed z-30"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰ {/* Toggle icon */}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 fixed lg:relative z-20 bg-gray-800 text-white w-64 min-h-screen`}
        >
          <div className="flex flex-col min-h-screen items-center space-y-6 py-6">
            {/* Home */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <FaHome onClick={() => setActive("Dashboard")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Dashboard
              </span>
            </div>

            {/* Add Project */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <IoIosAddCircleOutline onClick={() => setActive("Add Project")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Add Project
              </span>
            </div>

            {/* Add Skill */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <MdAddchart onClick={() => setActive("Add Skill")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Add Skill
              </span>
            </div>

            {/* Add Application */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <BiSolidAddToQueue onClick={() => setActive("Add Application")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Add Application
              </span>
            </div>

            {/* Add Account */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <HiUserPlus onClick={() => setActive("Add Account")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Add Account
              </span>
            </div>

            {/* Add Timeline */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <MdOutlineAddAlarm onClick={() => setActive("Add Timeline")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Add Timeline
              </span>
            </div>

            {/* Add Message */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <BiMessageRoundedAdd onClick={() => setActive("Add Message")} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Add Message
              </span>
            </div>

            {/* Logout */}
            <div className="group relative">
              <div className="text-2xl group-hover:text-blue-500 duration-300">
                <FaSignOutAlt onClick={handleLogout} />
              </div>
              <span className="absolute left-10 w-max bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300">
                Logout
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className={`w-full lg:pl-64  transition-all duration-300 ${isSidebarOpen ? "hidden lg:block" : ""}`}>
          {/* Avatar Image */}
          <div className={`w-40 h-40 rounded-full ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
            {user && user.avatar && (
              <img src={user.avatar.url} alt="user-avatar" className="w-32 h-32 rounded-full" />
            )}
          </div>

          {/* Welcome Message */}
          <div>
            <h1 className="md:text-3xl text-sm  font-bold">
              Welcome Back, <span>{user?.fullName}</span>
            </h1>
          </div>

          {/* Render different components based on 'active' state */}
          {active === "Dashboard" && <Dashboard />}
          {active === "Add Project" && <AddProject />}
          {active === "Add Skill" && <AddSkill />}
          {active === "Add Timeline" && <AddTimeline />}
          {active === "Add Message" && <Message />}
          {active === "Add Account" && <Account />}
          {active === "Add Application" && <AddApplication />}

        </div>
      </div>
    </>
  );
};

export default HomePage;
