import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import redusers from "./redusers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "../pages/Loader/Loader";
import { postsAPI } from "../servises/PostsServise";
import { usersAPI } from "../servises/UsersServise";

interface StoredProviderProps {
  children: React.ReactNode;
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: [postsAPI.reducerPath, usersAPI.reducerPath],
};

const rootReducer = combineReducers({
  ...redusers,
  [postsAPI.reducerPath]: postsAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setapStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(postsAPI.middleware)
        .concat(usersAPI.middleware),
  });
};

const store = setapStore();

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setapStore>;
export type AppDispatch = AppStore["dispatch"];

export const StoredProvider: React.FC<StoredProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        {children}
      </PersistGate>
    </Provider>
  );
};
