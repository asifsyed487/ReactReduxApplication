import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import "./PostComponent.css";

function PostComponent() {
  const styleButton = {
    marginTop: "12px",
  };
  const { posts } = useSelector((state) => state.posts);
  // console.log(posts);
  const renderList = posts.map((post) => {
    const { id, title, body } = post;
    return (
      <div className="col-lg-4 col-md-6 mt-4 per-box" key={id}>
        <div className="card d-flex flex-column h-100">
          <img
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                maxHeight: "35px",
                overflow: "hidden",
                fontSize: "2rem",
              }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{
                maxHeight: "90px",
                overflow: "hidden",
                fontSize: "1.5rem",
              }}
            >
              {body}
            </p>
            <div className="align-flex">
              <Link
                to={`post/${id}`}
                className="nav-link p-0"
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Read More
              </Link>
              <Fab style={styleButton}>
                <DeleteIcon />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList} </>;
}

export default PostComponent;
