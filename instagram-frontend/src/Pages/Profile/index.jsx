import React, { useState, useEffect } from "react";
import SideNav from "../../Components/HomePage/SideNav";
import "./style.css";
import userProfileData from "./hook";

const Profile = () => {
  const {
    selectedImage,
    followers,
    followings,
    posts,
    user,
    handleImageChange,
    fetchData,
  } = userProfileData();
  useEffect(() => {
    fetchData();
  }, []);

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
                src={selectedImage}
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
                <span> {posts.length}</span> posts
              </div>
            </div>
            <div className="flex column">
              <button className="button">Edit Profile</button>
              <div className="followers">
                <span> {followers.length}</span> followers
              </div>
            </div>
            <div>
              <button className="button">View archive</button>
              <div className="following">
                <span> {followings.length}</span> following
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
