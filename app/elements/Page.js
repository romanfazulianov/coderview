/**
 * Created by fazdev on 08.09.16.
 */

import React from "react";
import ReactDom from "react-dom";

import './Page.scss';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import appBarStyles from '../inlineStyles/appBar';

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
                    showMenuIconButton={false}>
                    Фазульянов Роман
                {/*iconClassNameRight="muidocs-icon-navigation-expand-more">*/}
                    <Avatar src={this.props.avatar} />
                </AppBar>

            <div className="page-body" />
        </div>;
    }
}