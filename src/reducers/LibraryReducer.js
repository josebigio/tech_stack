import data from './LibraryList.json';
const LibraryReducer = (state=data,action) => {
	console.log('LibraryReducer',state,action)
	switch(action.type) {
		case'select_library':
			return state.map((element)=>{
				if(element.id === action.payload) {
					element.expanded = !element.expanded;
				}
				return element;
			});
		default:
			console.log('default case');
			return state;
	}
}
export default LibraryReducer;