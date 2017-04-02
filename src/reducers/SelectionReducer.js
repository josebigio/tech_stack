export default (state = null, action) => {
	console.log('SelectionReducer',state,action);
	switch(action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};