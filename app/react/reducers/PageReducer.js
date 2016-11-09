/**
 * Created by fazdev on 08.11.16.
 */

import * as actionTypes from '../constants/actionTypes';

class PageState {
    /** @type {?number} */
    testNum = null;
    /** @type {object[]} */
    results = [];
    cleared = false;
}

export default function (state = new PageState(), action = null) {
    /** @type {PageState} */
    let newState = /** @type {PageState} */Object.assign(new PageState(), state);

    switch (action.type) {
        case actionTypes.clearTestResultsBeforeRun:
            newState.testNum = 0;
            newState.results = [];
            newState.cleared  = false;
            console.log('start:', newState);

            return newState;


        case actionTypes.updateTestResultsAfterRun:
            ++newState.testNum;
            newState.results = /** @type {object[]} */action.payload.slice();
            newState.cleared  = false;
            console.log('upd:', newState);
            return newState;

        case actionTypes.cleared:
            newState.cleared  = true;
            console.log('clear:', newState);
            return newState;

        default:
            return state;//нет изменений в стейте
    }
}