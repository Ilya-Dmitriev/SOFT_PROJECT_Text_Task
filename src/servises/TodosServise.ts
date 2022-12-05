import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITodo } from "../models/ITodo";

const basePath = "https://jsonplaceholder.typicode.com/";

export const todosAPI = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (build) => ({
    fetchTodos: build.query<ITodo[], null>({
      query: () => ({
        url: "todos",
      }),
    }),
    fetchCompletedTodos: build.query<ITodo[], null>({
      query: () => ({
        url: "todos",
        params: { completed: true },
      }),
    }),
    fetchNonCompletedTodos: build.query<ITodo[], null>({
      query: () => ({
        url: "todos",
        params: { completed: false },
      }),
    }),
  }),
});
