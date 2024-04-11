import React, { useState } from "react";
import SideNav from "../../Components/HomePage/SideNav";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = useSelector((state) => state.user);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="flex">
      <div className="profilepage__navWraper">
        <SideNav />
      </div>
      <div className="profilepage ">
        <div className="flex">
          <label className="profile-image-label flex">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="profile-image"
              />
            ) : (
              <div className="profile-image-placeholder flex center">
                Choose Photo
              </div>
            )}
            <input
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
          <div className="flex section ">
            <div className="flex column first-column">
              <div className="user-name"> afifayoubi</div>
              <div className="post-number">
                <span> 2</span> posts
              </div>
            </div>
            <div>
              <button>Edit Profile</button>
              <div className="followers">
                <span> 2</span> followers
              </div>
            </div>
            <div>
              <button>View archive</button>
              <div className="following">
                <span> 2</span> following
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
