import { getGame } from "../../api";
import ActionTypes from "../actionTypes";

export function getGameInfo() {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_GAME,
      });
      const { data } = await getGame();
      dispatch({
        type: ActionTypes.GET_GAME_SUCCESS,
        game: data.game,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.GET_GAME_ERROR,
        error: err,
      });
    }
  };
}
