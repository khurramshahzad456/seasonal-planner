import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:3000" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({
    tour: builder.query({
      query: (queryArg) => ({
        url: "/recommendations",
        params: queryArg,
      }),
    }),
  }),
});

export const { useTourQuery } = apiSlice;
