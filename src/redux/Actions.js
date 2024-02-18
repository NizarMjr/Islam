import { Types } from "./Types"

export const getSurah = (payload) => {
    return {
        type: Types.SURAH_ID,
        payload: payload,
    }
}
export const setEndpoint = (payload) => {
    return {
        type: Types.ENDPOINT,
        payload: payload,
    }
}
export const recitationID = (payload) => {
    return {
        type: Types.RECITATION_ID,
        payload: payload,
    }
}