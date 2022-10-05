export const ADD_ELEMENT = "ADD_ELEMENT";

export const actionAdd = function (data) {
    return {
        type: ADD_ELEMENT,
        payload: data
    }
}