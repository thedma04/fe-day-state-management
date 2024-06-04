// some util to load data
export const loadStateFromStorage = <T>(
  storageKey: string,
  storage: Storage,
  initialState: T
): T => {
  const storedState = storage.getItem(storageKey);
  if (storedState) {
    return JSON.parse(storedState);
  }
  return initialState;
};
