import { createSlice, current } from "@reduxjs/toolkit";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    selectPost(state, action) {
      state.selectedPost = action.payload;
    },
    removeSelectedPost(state, action) {
      state.selectedPost = null;
    },
    createPost(state, action) {
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      state.posts = current(state).posts.map((p) =>
        p.id !== action.payload.id ? p : action.payload
      );
    },
    deletePost(state, action) {
      state.posts = current(state).posts.filter(
        (p) => p.id !== action.payload.id
      );
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice;
// Extract and export each action creator by name
export const {
  setPosts,
  selectPost,
  removeSelectedPost,
  createPost,
  updatePost,
  deletePost
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
