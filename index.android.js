/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react-native');

var {
    AppRegistry,
} = React;

var MainPage = require('./src/mainPage')


AppRegistry.registerComponent('First_ReactNative', () => MainPage);
