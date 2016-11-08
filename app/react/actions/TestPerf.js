/**
 * Created by fazdev on 08.11.16.
 */

import * as actionTypes from '../constants/actionTypes';

export function incrementTestNum() {
    return {
        type: actionTypes.incrementTestNum
    };
}

export function setTestNumToZero() {
    return {
        type: actionTypes.setTestNumToZero
    };
}