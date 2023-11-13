import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'content-type': 'application/json',
  'X-RapidAPI-Key':  import.meta.env.VITE_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_NEWS_HOST
};

const baseUrl = "https://newsnow.p.rapidapi.com";

//calculate and format date in dd/mm/yyyy
const currentDate = new Date();
const oneWeekAgo = new Date(currentDate);
oneWeekAgo.setDate(currentDate.getDate() - 7);

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


const createRequest = (url) => ({
  method: 'POST',
  url,
  headers: cryptoNewsHeaders,
  body:{
      query: "AI",
      page: 1,
      time_bounded: true,
      from_date:  formatDate(oneWeekAgo),
      to_date: formatDate(currentDate),
      location: "",
      category: "cryptocurrency",
      source: "",
  }
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/newsv2`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi ;
