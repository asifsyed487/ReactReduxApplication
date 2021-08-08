import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeButton from "./HomeButton";
import "./PostDetails.css";
import { selectPost, removeSelectedPost } from "../redux/postSlice";

function PostDetails() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id.toString() === postId);
  const { title, body } = post;
  // console.log(postId);
  useEffect(() => {
    const fetchPostDetail = async () => {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(selectPost(response.data));
    };

    fetchPostDetail();
    return () => {
      dispatch(removeSelectedPost());
    };
  }, [dispatch, postId]);
  return (
    <div className="post">
      <HomeButton />
      <div className="row">
        <div className="col-md-12">
          <div id="individual-post-image">
            <img
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
              alt="..."
            />
          </div>
          <div id="individual-post-title">{title}</div>
          <div id="individual-post-content">{body}</div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
