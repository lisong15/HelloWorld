/**
 * Created by liyang on 16/12/2.
 */
import React, {Component} from "react";
import {View, Text, BackAndroid, StyleSheet, Dimensions, TextInput, PixelRatio, TouchableOpacity} from "react-native";
import BaseStyles from "../styles/styles";
import HeadView from "./commonHeadView";
import utils from "../utils/utils";
import FindPwd2 from "./FindPwd2";
import Button from "./Button";

export default class FindPwd extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackPressed)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this._onBackPressed);
    }

    _onBackPressed = () => {
        console.log(`${this.props.nm} ${this.props.dp} ${this.props.nv}`);
        const {nv} = this.props;
        if (!nv) {
            return true;
        }
        const routers = nv.getCurrentRoutes();
        if (routers.length > 1) {
            nv.pop();
            return true;
        }
        return false;
    };

    _toPwd2 = () => {
        let {nv} = this.props;
        if (nv) {
            nv.push({
                name: 'find pwd',
                component: FindPwd2,
                params: {
                    name: 'first pwd',
                    nv: nv
                }
            })
        }
    };

    _onBack = () => {
        utils.onBack(this.props.nv, '');
    };

    render() {
        return ( <View style={{flex: 1}}>
            {/*<View style={{flex: 0.5,backgroundColor: 'white'}}/>*/}
            <HeadView nv={this.props.nv} text="找回密码" onBackClick={this._onBack}/>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.5,}}/>

                <View style={{flex: 1, flexDirection: 'column',marginTop:utils.dp2px(94)}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[,{
                                fontSize : BaseStyles._base_text_px_size,
                                textAlign:'right',
                                textAlignVertical: 'center',
                            }, {color: '#333333'}]}>账号: </Text>
                        <TextInput style={[, {fontSize : BaseStyles._base_text_px_size,flex: 6}]} placeholder="请输入账号"
                                   underlineColorAndroid="transparent"
                                   placeholderTextColor="#cccccc"
                                   autoFocus={false}/>
                    </View>
                    <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                    {/*<View style={{flexDirection: 'row'}}>*/}
                    {/*<TouchableOpacity*/}
                        {/*onPress={this._toPwd2}*/}
                        {/*style={[{marginTop:BaseStyles._base_btn_dx_height},BaseStyles.views._btn_common]}>*/}
                        {/*<Text*/}
                            {/*style={BaseStyles.views._common_text}>下一步</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <View style={{marginTop:BaseStyles._base_btn_dx_height}}>
                        <Button btntext="下一步" onBtnClick={this._toPwd2} btnHeight={48}
                                btncolor={BaseStyles._base_yellow}
                                btnTextColor="#fff" btnRadius={utils.dp2px(5)}/>
                    </View>

                </View>
                {/*</View>*/}
                <View style={{flex: 0.5,}}/>
            </View>

        </View>)
    }
}