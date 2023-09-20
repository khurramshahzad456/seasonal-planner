import { apiSlice } from "./apiSlice";
const USER_URL = "localhost:3000";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tour: builder.query({
      query: (queryArg) => ({
        url: "/recommendations",
        params: queryArg,
      }),
    }),
  }),
});

export const { useTourQuery } = userApiSlice;
