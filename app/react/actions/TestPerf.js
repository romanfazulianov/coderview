/**
 * Created by fazdev on 08.11.16.
 */

import * as actionTypes from '../constants/actionTypes';

export function clearTestResultsBeforeRun() {
    return {
        type: actionTypes.clearTestResultsBeforeRun
    };
}

export function updateTestResultsAfterRun(result) {
    return {
        type: actionTypes.updateTestResultsAfterRun,
        payload: result
    };
}

export  function cleared() {
    return {
        type: actionTypes.cleared
    };
}