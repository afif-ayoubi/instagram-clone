import { useState } from "react";
import { sendRequest } from "../../../Core/tools/request";
import { requestMethods } from "../../../Core/Enums/requestMethods";
import { useSelector } from "react-redux";

const useProfileData = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
  };

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
      const UserPosts = await sendRequest({
        method: requestMethods.GET,
        route: `getUserPosts/${user.id}`,
      });
      setPosts(UserPosts.data.data);
      setFollowers(followersResponse.data.data);
      setFollowings(followingsResponse.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    selectedImage,
    followers,
    followings,
    posts,
    user,
    handleImageChange,
    fetchData,
  };
};

export default useProfileData;
