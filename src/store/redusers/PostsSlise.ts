import { IPost } from "../../models/IPost";
import { createSlice } from "@reduxjs/toolkit";

interface PostsState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postsSlise = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlise.reducer;
