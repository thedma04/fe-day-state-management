import {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";
import { createStore, Store } from "./store";
import { loadStateFromStorage } from "./util";

export type StoreState = {
  count: number;
};

const storageKey = "appState";
const storage = localStorage; // or sessionStorage, or any custom storage implementation

const defaultState = loadStateFromStorage(storageKey, storage, {
  count: 0,
  // add other initial state properties
});

const StoreContext = createContext<Store<StoreState>>(
  createStore<StoreState>({ count: 0 })
);

export const StoreProvider = ({
  initialState = defaultState,
  children,
}: {
  initialState?: StoreState;
  children: ReactNode;
}) => {
  const storeRef = useRef<Store<StoreState>>();

  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = <S,>(selector?: (state: StoreState) => S) => {
  const store = useContext(StoreContext);

  const state = useSyncExternalStore(store.subscribe, () =>
    selector?.(store.getState())
  );

  // const [state, setState] = useState(selector?.(store.getState()));

  // useEffect(() => {
  //   const callback = (newState: StoreState) => setState(selector?.(newState));
  //   const unsubscribe = store.subscribe(callback);
  //   return unsubscribe;
  // }, [selector, store]);

  return {
    state,
    dispatch: store.setState,
  };
};
