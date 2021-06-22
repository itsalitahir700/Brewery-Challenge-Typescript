import { service } from "../../services/Brewery";
import actionTypes from "./action.enum";

const getAutoComplete = async (search: string) => {
  try {
    const resp: any = await service.getAutoComplete(search);
    return resp.data;
  } catch (error) {
    return false;
  }
};

const getBreweryByName = async (name: string) => async (dispatch: any) => {
  try {
    const resp = await service.getBreweryByName(name);
    if (resp) {
      dispatch({
        type: actionTypes.BREWERY_SUCCESS,
        payload: resp.data,
      });
      return resp.data;
    }
  } catch (error) {
    dispatch({
      type: actionTypes.BREWERY_ERROR,
      error,
    });
  }
};

const getBrewery = async (id: number) => async (dispatch: any) => {
  try {
    const resp = await service.getBrewery(id);
    if (resp) {
      dispatch({
        type: actionTypes.BREWERY_DETAILS_SUCCESS,
        payload: resp.data,
      });
      return resp.data;
    }
  } catch (error) {
    dispatch({
      type: actionTypes.BREWERY_DETAILS_ERROR,
      error,
    });
  }
};

export { getBreweryByName, getBrewery, getAutoComplete };
