export default (state = [], action) => {
	switch(action.type) {
		case "GET_ALL_FILTERS":
			return action.payload;
		default:
			return state;
	}
}