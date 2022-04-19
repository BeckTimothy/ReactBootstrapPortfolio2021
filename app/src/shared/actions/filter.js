//import {httpConfig} from "../utils/http-config";

export const getFilters = (filters) => async (dispatch) => {
	const payload =  {data:filters};
	dispatch({type: "GET_ALL_FILTERS",payload : payload.data });
};