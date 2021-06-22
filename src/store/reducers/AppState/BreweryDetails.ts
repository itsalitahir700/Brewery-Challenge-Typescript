import actionTypes from "../../actions/action.enum";
const defaultState = null;

type Action = {
  type: actionTypes.BREWERY_DETAILS_SUCCESS;
  payload: string;
};

const breweryDetailsState = (state = defaultState, action: Action) => {
  switch (action.type) {
    case actionTypes.BREWERY_DETAILS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default breweryDetailsState;
