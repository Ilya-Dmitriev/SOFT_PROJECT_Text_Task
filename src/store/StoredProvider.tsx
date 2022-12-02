import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { combineReducers } from "redux";

interface StoredProviderProps {
  children: React.ReactNode;
}

const rootReduser = combineReducers({});

const setapStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setapStore>;
export type AppDispatch = AppStore["dispatch"];

export const StoredProvider: React.FC<StoredProviderProps> = ({ children }) => {
  return <Provider store={setapStore()}>{children}</Provider>;
};
