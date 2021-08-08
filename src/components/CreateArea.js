import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import "./CreateArea.css";
import { createPost } from "../redux/postSlice";

function CreateArea(props) {
  const [flag, setFlag] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: uuidv4(),
      title: title,
      body: body,
    };
    dispatch(createPost(post));
    alert("Your Post Successfully Created!");
    history.push("/");
  };

  function setExpand() {
    setFlag(true);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <form className="create-post">
          {flag ? (
            <input
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              autoComplete="off"
            />
          ) : null}

          <textarea
            name="body"
            onClick={setExpand}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Post something here..."
            rows={flag ? 3 : 1}
          />
          {flag ? (
            <Zoom in={true}>
              <Fab onClick={onSubmit}>
                <AddIcon />
              </Fab>
            </Zoom>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
