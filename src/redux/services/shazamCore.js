// @API CALL FROM SHAZAM API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://shazam-core.p.rapidapi.com/v1/charts/world";

// export const shazam2Api = createApi({
//   reducerPath: "shazam2Api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://shazam8.p.rapidapi.com",
//     prepareHeaders: (headers) => {
//       headers.set(
//         "X-RapidAPI-Key",
//         "99241e245cmsh60843fca1f55fd1p1616c2jsn649f6ef7e19e"
//       );
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getSongsByCountry : builder.query({
//       query: ({ songid }) => `/track/top/country?country_code=${country}&limit=10`,
//     }),
//   })
// })

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "99241e245cmsh60843fca1f55fd1p1616c2jsn649f6ef7e19e"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/list" }),
    // getSongsByGenre : builder.query({ query : (genre)=> })
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?key=${songid}`,
    }),
    getArtistsDetails: builder.query({
      query: (artistId) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/country/country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&limit=10`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistsDetailsQuery,
  useGetSongsBySearchQuery,
  useGetSongsByCountry,
} = shazamCoreApi;
