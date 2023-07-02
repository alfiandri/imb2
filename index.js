/**
 * @format
 */

import { registerRootComponent } from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import App from './src/App';
import configureStore from './src/helper/redux/configStore';
registerRootComponent(App);

export const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
