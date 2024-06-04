export type StateUpdater<T> = (prev: T) => T | Partial<T>;

export type Store<T> = {
  getState: () => T;
  setState: (update: StateUpdater<T>) => void;
  subscribe: (callback: () => void) => () => void;
};

export type Middleware<T> = (
  store: Store<T>
) => (next: Store<T>["setState"]) => Store<T>["setState"];

export const createStore = <T>(): Store<T> => {
  return {
    getState: () => ({} as T),
    setState: () => {},
    subscribe: () => () => {},
  };
};
