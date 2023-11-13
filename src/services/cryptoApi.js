import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key":  import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query:(coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory:builder.query({
      query:({coinId,timeperiod})=> createRequest(
        `coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeperiod}`)
    }),
    getCryptoExchanges:builder.query({
      query:((uuid)=> createRequest(`/coin/${uuid}/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc`))
    })
  }),
});

export const { useGetCryptosQuery , useGetCryptoDetailsQuery, useGetCryptoHistoryQuery , useGetCryptoExchangesQuery } = cryptoApi;

// NOTE : The parameters inside of the query() , should be exactly same as when the respective hook is called from the components by passing the needed parameters
