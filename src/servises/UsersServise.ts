import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models/IUser";

const basePath = "https://jsonplaceholder.typicode.com/";

export const usersAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (build) => ({
    fetchUserdById: build.query<IUser[], number[] | undefined>({
      query: (idList = []) => ({
        url: `users?id=${idList.join("&id=")}`,
      }),
    }),
  }),
});
