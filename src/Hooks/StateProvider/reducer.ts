export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
};

interface initialStateProps {
  term: string;
}

interface actionTypesProps {
  type: string;
  term: string;
}

const reducer = (state: initialStateProps, action: actionTypesProps) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
