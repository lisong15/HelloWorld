/**
 * Created by liyang on 16/12/1.
 */
import React, {Component} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';

import user from './UserBeans';
export default class RealmT extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    a = 0;

    render() {
        return (<View style={style.container}>
            <TouchableHighlight>
                <Text>
                    {`你好 ${user.age} ${this.a}`}
                </Text>
            </TouchableHighlight>
        </View>)
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});
