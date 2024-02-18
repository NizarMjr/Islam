import { Types } from "./Types";

const info = {
    'ID': '',
    'juz': '',
    'page': ''
};
const endpoint = 'chapters';

const recitationID = '1';

export const reducerGetSurah = (state = info, { type, payload }) => {
    switch (type) {
        case Types.SURAH_ID: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerSetEndpoint = (state = endpoint, { type, payload }) => {
    switch (type) {
        case Types.ENDPOINT: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerRecitationID = (state = recitationID, { type, payload }) => {
    switch (type) {
        case Types.RECITATION_ID: {
            state = payload;
            return state;
        }
        default: return state;
    }
}