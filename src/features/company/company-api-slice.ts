import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Company {
  id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
  };
}

export const companiesApiSlice = createApi({
  reducerPath: 'companyApi',
  tagTypes: ['Companies'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io/b',
  }),
  endpoints(builder) {
    return {
      fetchCompanies: builder.query<Company[], number | void>({
        query() {
          return '/6177e9399548541c29c8c0f5';
        },
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Companies' as const, id })),
                { type: 'Companies', id: 'LIST' },
              ]
            : [{ type: 'Companies', id: 'LIST' }],
      }),
    };
  },
});

export const { useFetchCompaniesQuery } = companiesApiSlice;
