/**
 * Created by fazdev on 08.11.16.
 */

import * as actionTypes from '../constants/actionTypes';

class PageState {
    /** @type {number} */
    testNum = 0;
}

export default function (state = new PageState(), action = null) {
    let newState = Object.assign(new PageState(), state);

    switch (action) {
        case actionTypes.setTestNumToZero:
            newState.testNum = 0;
            return newState;
        case actionTypes.incrementTestNum:
            ++newState.testNum;
            return newState;
        default:
            return state;//нет изменений в стейте
    }
}