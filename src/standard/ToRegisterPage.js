/**
 * Created by song on 16/11/25.
 */
import React, {Component} from "react";
import {View, Text, BackAndroid, StyleSheet, Dimensions, TextInput, PixelRatio, TouchableOpacity} from "react-native";
import BaseStyles from "../styles/styles";
import utils from "../utils/utils";
import HeadView from "./commonHeadView";
export default class RegisterPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hintText: '获取验证码',
        };
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackPressed)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this._onBackPressed);
        this._unMountTimer();
    }

    _unMountTimer = () => {
        this.timer && clearInterval(this.timer);
    };
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

    _getIdentify = () => {
        let count = 10;
        this.setState({
            hintText: 10
        });

        this.timer = setInterval(() => {
            count--;
            if (count == -1) {
                this.setState({hintText: '点击重新发送'});
                this._unMountTimer();
                return;
            }
            this.setState({hintText: count});
            // console.log('this is the log ' + count)
        }, 1000);
    };

    _onBack = () => {
        utils.onBack(this.props.nv, '');
    };

    render() {
        return (
            <View style={{flex: 1, }}>
                <HeadView nv={this.props.nv} text="注册" onBackClick={this._onBack}/>
                <View style={{flex: 1, flexDirection: 'row'}}>

                    <View style={{flex: 0.5}}/>
                    <View style={{flex: 1, flexDirection: 'column', marginTop:200,}}>
                        <View style={{flexDirection: 'row',height:BaseStyles._base_btn_dx_height}}>
                            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={[styles.font, {
                            }, {color: '#333333'}]}>账号: </Text>
                            </View>
                            <TextInput style={[styles.font, {flex: 3}]} placeholder="请输入账号"
                                       underlineColorAndroid="transparent"
                                       placeholderTextColor="#cccccc"
                                       autoFocus={false}/>
                        </View>
                        <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                        <View style={{flexDirection: 'row',height:BaseStyles._base_btn_dx_height}}>
                            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={[styles.font, {justifyContent:'space-between',
                                textAlignVertical: 'center'
                            }, {color: '#333333'}]}>密码: </Text>
                            </View>
                            <TextInput style={[styles.font, {flex: 3}]} placeholder="请输入密码"
                                       placeholderTextColor="#cccccc"
                                       underlineColorAndroid="transparent"
                                       autoFocus={false}/>
                        </View>
                        <View style={{backgroundColor: '#d9d9d9', height: 1}}/>

                        <View
                            style={{flexDirection: 'row', height:BaseStyles._base_btn_dx_height}}>
                            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={[styles.font, {
                                textAlignVertical: 'center'
                            }, {color: '#333333'}]}>手机号: </Text>
                            </View>
                            <TextInput style={[styles.font, {flex: 3,}]} placeholder="请输入手机号"
                                       placeholderTextColor="#cccccc"
                                       underlineColorAndroid="transparent"
                                       autoFocus={false}/>
                        </View>

                        <View style={{backgroundColor: '#d9d9d9', height: 1}}/>

                        <View style={{flexDirection: 'row', height:BaseStyles._base_btn_dx_height}}>
                            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={[styles.font, {
                                textAlignVertical: 'center'
                            }, {color: '#333333'}]}>验证码: </Text>
                            </View>
                            <TextInput style={[styles.font, {flex:3}]} placeholder="请输入验证码"
                                       placeholderTextColor="#cccccc"
                                       underlineColorAndroid="transparent"
                                       autoFocus={false}/>
                            <View
                                style={{alignSelf: 'center',alignItems: 'center',justifyContent: 'center',
                            borderColor:'#d9d9d9',borderWidth:1,borderRadius:3,width:100, height:BaseStyles._base_btn_dx_height/1.5,}}>
                                <Text onPress={this._getIdentify} style={{}}>
                                    {this.state.hintText}
                                </Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#d9d9d9', height: 1}}/>

                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                onPress={()=>{alert('哈哈哈: '+BaseStyles._base_btn_dx_height + '\\' + PixelRatio.get())}}
                                style={[{flex:1,marginTop:BaseStyles._base_btn_dx_height},BaseStyles.views._btn_common]}>
                                <Text
                                    style={BaseStyles.views._common_text}>下一步</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 0.5}}/>
                </View>
            </View>);

    }
}
const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        top: {
            flex: 3,
            alignSelf: 'center',
            width: 50,
            height: 50,

        },
        center: {
            flex: 3,
            // backgroundColor: 'gray'
        },
        foot: {
            flex: 3,
            // backgroundColor: 'green'
        },
        font: {
            fontSize: BaseStyles._base_text_px_size,
        }

    });