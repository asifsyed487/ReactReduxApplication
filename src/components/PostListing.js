import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/postSlice";
import PostComponent from "./PostComponent";
import "./PostListing.css";
import CreateArea from "./CreateArea";
function PostListing() {
  // const posts = useSelector((state) => state);
  // console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .catch((err) => {
          console.log(err);
        });
      // console.log(response.data);
      dispatch(setPosts(response.data));
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="boxes-margin">
      <CreateArea />
      <div className="row">
        <PostComponent />
      </div>
    </div>
  );
}

export default PostListing;
