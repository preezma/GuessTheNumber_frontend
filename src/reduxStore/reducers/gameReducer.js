import ActionTypes from "../actionTypes";

const initialState = {
  error: null,
  success: false,
  game: [],
};

function gameReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ActionTypes.GET_GAME: {
      return { ...state };
    }
    case ActionTypes.GET_GAME_SUCCESS: {
      return {
        ...state,
        error: null,
        success: true,
        game: action.game,
      };
    }
    case ActionTypes.GET_GAME_ERROR: {
      return { ...state, success: false, error: action.error };
    }
    default:
      return state;
  }
}

export default gameReducer;
