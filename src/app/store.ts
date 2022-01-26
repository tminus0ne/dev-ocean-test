import { configureStore } from '@reduxjs/toolkit';
import { companiesApiSlice } from '../features/company/company-api-slice';

export const store = configureStore({
  reducer: {
    [companiesApiSlice.reducerPath]: companiesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(companiesApiSlice.middleware);
  },
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
