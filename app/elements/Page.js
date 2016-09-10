/**
 * Created by fazdev on 08.09.16.
 */

import React from "react";
import ReactDom from "react-dom";

import './Page.scss';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import appBarStyles from '../inlineStyles/appBar';


import FontIcon from 'material-ui/FontIcon';
import {red400} from 'material-ui/styles/colors';
// import Header from '';
// import Content from '';
// import Footer from '';

export default class Page extends React.Component {
    componentDidMount() {

    }
    render () {
        return <div className="main-page">
                <AppBar className="header" ref={(ref) => {this.appBarEl = ReactDom.findDOMNode(ref)}}
                    title="CoderView"
                    titleStyle={appBarStyles.title}
                    style={appBarStyles.main}
                    showMenuIconButton={false}
                >
                    <span className="header__naming">Роман Фазульянов</span>
                    {/*iconClassNameRight="muidocs-icon-navigation-expand-more">*/}
                    <div>
                        <Avatar src={this.props.avatar} className="header__avatar"/>
                    </div>
                </AppBar>

            <div className="page-body">
                <FontIcon className="material-icons" color={red400}>warning</FontIcon>
                <h1>Сайт на реконструкции</h1>
            </div>
        </div>;
    }
}