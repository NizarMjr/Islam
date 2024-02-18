const { combineReducers } = require("redux");
const { reducerGetSurah, reducerSetEndpoint, reducerRecitationID } = require("./reducers");

const reducer = combineReducers({
    getSurah: reducerGetSurah,
    setEndpoint: reducerSetEndpoint,
    getRecitationID: reducerRecitationID,
})
export default reducer;