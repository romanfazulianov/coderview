/**
 * Created by fazdev on 07.09.16.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Page from './elements/Page';

const store = configureStore();

render(
    <Provider store={store}>
        <Page avatar={'assets/avatar.jpg'}/>
    </Provider>,
    document.getElementById('app')
);