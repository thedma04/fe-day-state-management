export type StateUpdater<T> = (prev: T) => T | Partial<T>;

export type Store<T> = {
  getState: () => T;
  setState: (update: StateUpdater<T>) => void;
  subscribe: (callback: () => void) => () => void;
};

export type Middleware<T> = (
  store: Store<T>
) => (next: Store<T>["setState"]) => Store<T>["setState"];

export const createStore = <T>(initialState: T): Store<T> => {
  const state = initialState;

  // Exercise 1
  // Great getState function

  // Exercise 2
  // Great setState function

  // Exercise 3
  // Great subscribe function

  //Exercise 4
  // Allow middlewares for custom implementation

  return {
    getState: () => ({} as T),
    setState: () => {},
    subscribe: () => () => {},
  };
};
