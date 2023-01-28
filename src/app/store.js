import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { coinApi } from '../services/CoinApi';

export default configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinApi.middleware)
});