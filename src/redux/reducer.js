import * as types from "./actionsType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.ADD_USER:
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
