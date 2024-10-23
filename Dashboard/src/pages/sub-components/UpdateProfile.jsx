import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProfile } from "../../slices/userSlice";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Local state for the form inputs
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    aboutMe: user?.aboutMe || "",
    githubURL: user?.githubURL || "",
    instagramURL: user?.instagramURL || "",
    facebookURL: user?.facebookURL || "",
    twitterURL: user?.twitterURL || "",
    linkedinURL: user?.linkedinURL || "",
    avatar: null,
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    if (e.target.name === "avatar" || e.target.name === "resume") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedData = new FormData();
    Object.keys(formData).forEach((key) => {
      updatedData.append(key, formData[key]);
    });

    dispatch(updateProfile(updatedData));
    toast.success("Profile updated successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Update Your Profile</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* About Me */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">About Me</label>
        <textarea
          name="aboutMe"
          value={formData.aboutMe}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>


      {/* GitHub URL */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">GitHub URL</label>
        <input
          type="url"
          name="githubURL"
          value={formData.githubURL}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Instagram URL */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Instagram URL</label>
        <input
          type="url"
          name="instagramURL"
          value={formData.instagramURL}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Facebook URL */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Facebook URL</label>
        <input
          type="url"
          name="facebookURL"
          value={formData.facebookURL}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Twitter URL */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Twitter URL</label>
        <input
          type="url"
          name="twitterURL"
          value={formData.twitterURL}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* LinkedIn URL */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">LinkedIn URL</label>
        <input
          type="url"
          name="linkedinURL"
          value={formData.linkedinURL}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Avatar Upload */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Avatar</label>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Resume Upload */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Resume</label>
        <input
          type="file"
          name="resume"
          accept=".pdf, .doc, .docx"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default UpdateProfile;
