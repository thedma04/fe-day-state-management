// middlewares goes here

import { Middleware } from "./store";
import { StoreState } from "./StoreContext";

// First middleware
// Create middleware to component rendering and time take

export const loggerMiddleware: Middleware<StoreState> = () => () => () => {};

// Second middleware
// Create middleware to store on storage ===> can be any medium

export const createStorageMiddleware = <T>(
  storageKey: string,
  storage: Storage
): Middleware<T> => {
  return () => () => () => {};
};
