/**
 * Created by fazdev on 08.09.16.
 */

import React from "react";
import {connect} from "react-redux";
import './Page.scss';

import TestingWithPerf from './TestingWithPerf';


/**
 * @param {RootState} state
 * @returns {PageProps}
 */
const mapStateToProps = (state) => {
    let props = new PageProps();
    props.testNum = state.page.testNum;
};

@connect(mapStateToProps)
export default class Page extends React.Component {
    /** @type {PageProps} */
    props;
    static defaultProps = new PageProps();
    static propTypes = {
        dispatch: React.PropTypes.func,
        testNum: React.PropTypes.number
    };

    render () {
        return <TestingWithPerf testNum={this.props.testNum} count={30} ammount={1000}/>;
    }
}
class PageProps {
    /** @type {number} */
    testNum = 0;
    /** @type {function} */
    dispatch = () => {};
}