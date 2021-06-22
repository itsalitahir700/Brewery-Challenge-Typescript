import actionTypes from "../../actions/action.enum";
const defaultState = null;

type Action = {
  type: actionTypes.BREWERY_SUCCESS;
  payload: string;
};

const breweryState = (state = defaultState, action: Action) => {
  switch (action.type) {
    case actionTypes.BREWERY_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default breweryState;
