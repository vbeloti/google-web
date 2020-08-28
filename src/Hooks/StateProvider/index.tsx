import React, {
  createContext, useContext, useReducer,
} from 'react';

export const StateContext = createContext<any>({});

interface initialStateProps {
  term: string;
}

interface StateProviderProps {
  reducer: any;
  initialState: any;
}

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('Error on context');
  }

  return context;
};

// export const useStateValue = () => useContext(StateContext);
