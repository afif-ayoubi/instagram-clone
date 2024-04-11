import React, { useState, useEffect } from "react";
import SideNav from "../../Components/HomePage/SideNav";
import "./style.css";
import { sendRequest } from "../../Core/tools/request";
import { requestMethods } from "../../Core/Enums/requestMethods";
import { useSelector } from "react-redux";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  useEffect(() => {
    fetchData();
  }, [user.id]);
  const fetchData = async () => {
    try {
      const followersResponse = await sendRequest({
        method: requestMethods.GET,
        route: `getFollowers/${user.id}`,
      });

      const followingsResponse = await sendRequest({
        method: requestMethods.GET,
        route: `getFollowings/${user.id}`,
      });
      console.log(followersResponse);
      console.log(followingsResponse);
      setFollowers(followersResponse.data.data);
      setFollowings(followingsResponse.data.data);
    } catch (error) {
      console.error(error);
    }
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
              <div className="user-name"> {user.name}</div>
              <div className="post-number">
                <span> 2</span> posts
              </div>
            </div>
            <div className="flex column">
              <button className="button">Edit Profile</button>
              <div className="followers">
                <span> 2</span> followers
              </div>
            </div>
            <div>
              <button className="button">View archive</button>
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
