import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAlbum } from "models/IAlbum";
import { IPhoto } from "models/IPhoto";

const basePath = "https://jsonplaceholder.typicode.com/";

export const albumsAPI = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (build) => ({
    fetchLimitPageAlboms: build.query<
      IAlbum[],
      { limit: number; page: number }
    >({
      query: (albumsQuery = { limit: 10, page: 1 }) => ({
        url: "albums",
        params: { _limit: albumsQuery.limit, _page: albumsQuery.page },
      }),
    }),
    fetchAlbomPhotos: build.query<IPhoto[], number>({
      query: (albumsId = 0) => ({
        url: `albums/${albumsId}/photos`,
      }),
    }),
  }),
});
