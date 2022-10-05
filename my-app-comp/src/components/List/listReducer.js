import {ADD_ELEMENT} from "./actionList";
import initialStore from "../../redux/initialStore";

const listReducer = function (initialState = initialStore.list, action) {
    switch (action.type) {
        case ADD_ELEMENT :
        {
            return [...initialState, action.payload];
        }

        default: {
            return initialState;
        }
    }
}

export default listReducer;