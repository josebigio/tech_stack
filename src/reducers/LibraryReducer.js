import data from './LibraryList.json';
const LibraryReducer = (state,action) => {
	console.log(state,action)
	return data;
}
export default LibraryReducer;