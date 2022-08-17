import { getGame } from "../../api";
import ActionTypes from "../actionTypes";

export function getGameInfo(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_GAME,
      });
      const { data } = await getGame(id);
      dispatch({
        type: ActionTypes.GET_GAME_SUCCESS,
        data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.GET_GAME_ERROR,
        error: err,
      });
    }
  };
}
