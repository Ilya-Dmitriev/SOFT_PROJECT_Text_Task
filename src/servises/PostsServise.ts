import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IComment } from "models/IComment";
import { IPost } from "../models/IPost";

const basePath = "https://jsonplaceholder.typicode.com/";

export const postsAPI = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (build) => ({
    fetchLimitPagePosts: build.query<IPost[], { limit: number; page: number }>({
      query: (postQuery = { limit: 10, page: 1 }) => ({
        url: "posts",
        params: { _limit: postQuery.limit, _page: postQuery.page },
      }),
    }),
    fetchPostComments: build.query<IComment[], number>({
      query: (postId = 0) => ({
        url: `posts/${postId}/comments`,
      }),
    }),
  }),
});
