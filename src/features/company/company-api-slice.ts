import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Company } from '../../models/Company';

export const companiesApiSlice = createApi({
  reducerPath: 'companyApi',
  tagTypes: ['Companies'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://api.jsonbin.io/b',
    baseUrl: 'https://61f627192e1d7e0017fd6ce8.mockapi.io/',
  }),
  endpoints: (builder) => ({
    fetchCompanies: builder.query<Company[], string | void>({
      // query: () => '/6177e9399548541c29c8c0f5',
      query: () => '/companies',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Companies' as const, id })),
              { type: 'Companies', id: 'LIST' },
            ]
          : [{ type: 'Companies', id: 'LIST' }],
    }),
    getCompany: builder.query<Company, string>({
      // query: (id) => `/6177e9399548541c29c8c0f5/${id}`,
      query: (id) => `/companies/${id}`,

      providesTags: (result, error, id) => [{ type: 'Companies', id }],
    }),
  }),
});

export const { useFetchCompaniesQuery, useGetCompanyQuery } = companiesApiSlice;
