/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// global.navigator = {userAgent: 'chrome/1.1.1'};
// global.document = {};
// global.__APP__ = true;
// global.__ANDROID__ = false;
// global.__IOS__ = true;
// require('./src');

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import Login from './src/standard/login';

export default class HelloWorld extends Component {
    // render() {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={styles.welcome}>
    //         Welcome to React Native 321!
    //       </Text>
    //       <Text style={styles.instructions}>
    //         To get started, edit index.ios.js
    //       </Text>
    //       <Text style={styles.instructions}>
    //         Press Cmd+R to reload,{'\n'}
    //         Cmd+D or shake for dev menu
    //       </Text>
    //     </View>
    //   );
    // }

    render() {
        let defaultName = 'FirstSceneComponent';
        let defaultComponent = Login;
        return ( < Navigator initialRoute={
            {
                name: defaultName,
                component: defaultComponent
            }
            }
                             configureScene={
                                 (route) => {
                                     const animation = route.customAnimation || Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;
                                     const noGesture = {...animation,gestures:{}};
                                     return noGesture;
                                 }
                             }
                             renderScene={
                                 (route, navigator) => {
                                     let Component = route.component;
                                     return <Component {...route.params} navigator={navigator}/>
                                 }
                             }
            />
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
