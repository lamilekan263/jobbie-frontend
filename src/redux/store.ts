import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";
import jobSlice from "./features/job/jobSlice";


const persistConfig = {
  key: 'root',
    storage,
  whitelist: ['auth'], 
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    job: jobSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});



export const persistor = persistStore(store);
