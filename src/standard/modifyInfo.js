/**
 * Created by liyang on 16/12/16.
 */
import React, {Component} from "react";
import {Text, View, TextInput, Image, TouchableOpacity, BackAndroid} from "react-native";
import utils from "../utils/utils";
import HeadView from "./commonHeadView";
import EditBox from "./ceditInfo";
// import * as abc from './ceditInfo';

export default class ModifyInfo extends Component {

    resultText = '';
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    _onTextChanged = (text) => {
        console.log(`ModifyInfo _onTextChanged back: ${text}`);
        this.resultText = text;
    };
    _onBack = () => {
        console.log(`ModifyInfo _onBack back:in oooo ${this.resultText}`);
        if (this.resultText == '') {
            this.resultText = this.props.nv.getCurrentRoutes()[this.props.nv.getCurrentRoutes().length - 1].params.textHint;
        }
        utils.onBack(this.props.nv, this.resultText);
        resultText = '';
    };

    render() {
        return (<View style={{backgroundColor: '#f2f2f2'}}>
            <HeadView text={`修改${this.props.title}`} nv={this.props.nv} hasIcon={true} onBackClick={this._onBack}/>
            <View style={{marginTop: utils.dp2px(16)}}>
                <EditBox {...this.props} textChanged={this._onTextChanged}/>
            </View>
        </View>)
    }
}