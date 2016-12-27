/**
 * Created by song on 2016/11/17.
 */
import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    Dimensions,
    Alert,
    Platform,
    Linking,
    Navigator,
    TouchableOpacity,
    PixelRatio
} from "react-native";
import {
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater
} from "react-native-update";
import BaseStyles from "../styles/styles";
import toast from "../native_utils/AToast";
import HeadView from "./commonHeadView";
import utils from "../utils/utils";
// let gda = require('../libs/webim');
// var aaa = require('alertsss');
import register from "./ToRegisterPage";
import findPwd from "./FindPwd";
import Scenter from "./selfSetting";
import Button from "./Button";

// const {appKey} = _updateConfig[Platform.android];
const appKey = "WRgXR6In4SEen-UtiLJpesunKGwYpWnV";

export default class LoginClass extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _optionOne = () => {
        toast.show('你点了取消', toast.SHORT);
    };

    _optionTwo = (info = '') => {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?', [
                {
                    text: '是',
                    onPress: () => {
                        switchVersion(hash);
                    }
                },
                {text: '否',},
                {
                    text: '下次启动时',
                    onPress: () => {
                        switchVersionLater(hash);
                    }
                },
            ]);
        }).catch(err => {
            toast.show('更新失败' + err, toast.SHORT);
        })
    };
    /**
     * Android平台上只有三个选项，IOS没有限制
     * @private
     */
    _loginPressed = () => {
        // toast.show('你点了登录', toast.SHORT);
        this._findPwd();
        // this._checkUp();//debug模式下，不要走热更新的任何流程
        //     Alert.alert('标题', '内容',
        //         [
        //             {text: 'options 1', onPress: this._optionOne},
        //             {text: 'options 2', onPress: this._optionOne},
        //             {text: 'options 3', onPress: this._optionOne},]);


    };

    _loginSuccess = () => {
        // uuu.aaa();
        // alert(Cda.adb.CONNECTION_STATUS.ON);
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                               name: 'setting',
                               component: Scenter,
                               customAnimation: Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft,
                               params: {
                                   name: 'tom',
                                   nv: navigator
                               }
                           })
        }

    };

    _findPwd = () => {
        // toast.show('找回密码', toast.SHORT);
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                               name: 'find pwd',
                               component: findPwd,
                               customAnimation: Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft,
                               params: {
                                   name: 'tom',
                                   nv: navigator
                               }
                           })
        }
    };
    _register = () => {
        // toast.show('注册', toast.SHORT);
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                               name: 'register pages',
                               component: register,
                               customAnimation: Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft,
                               params: {
                                   nm: 'from login',
                                   dp: 'this is the dp from login page',
                                   nv: navigator
                               }
                           })
        }
    };
    _checkUp = () => {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                toast.show('您的应用版本已更新,请前往应用商店下载新的版本', toast.SHORT);
            }
            else if (info.upToDate) {
                toast.show('您的应用版本已是最新', toast.SHORT);
            }
            else {
                // toast.show('检查到新的版本' + info.name + ',是否下载?\n' + info.description, toast.SHORT);
                Alert.alert('这是', '检查到新的版本' + info.name + ',是否下载?\n' + info.description,
                            [
                                {
                                    text: 'options 1',
                                    onPress: this._optionOne
                                },
                                {
                                    text: 'options 2',
                                    onPress: this._optionTwo(info)
                                },
                            ]);
            }
        }).catch(err => {
        });
    };

    _onBtnClick = () => {
        alert('你点了登录');
    };

    render() {
        return (<View style={{flex: 1, }}>
            <HeadView nv={this.props.nv} text="登录" hasIcon={false}/>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.5,}}/>

                <View style={{flex: 1, flexDirection: 'column',margin:utils.dp2px(94),}}>
                    <View style={{alignItems: 'center',marginBottom: utils.dp2px(37)}}>
                        <Image source={require('../../img/finish.png')}/>
                    </View>
                    <View
                        style={{flexDirection: 'row', height:BaseStyles._base_btn_dx_height}}>
                        <View style={{alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={[, {fontSize : BaseStyles._base_text_px_size,
                                textAlignVertical: 'center'
                            }, {color: '#333333'}]}>账号: </Text>
                        </View>
                        <TextInput style={[ {flex: 3,fontSize : BaseStyles._base_text_px_size}]} placeholder="请输入账号"
                                   placeholderTextColor="#cccccc"
                                   underlineColorAndroid="transparent"
                                   autoFocus={false}/>
                    </View>
                    <View style={{backgroundColor: '#d9d9d9', height: 1}}/>

                    <View
                        style={{flexDirection: 'row', height:BaseStyles._base_btn_dx_height}}>
                        <View style={{alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={[, {fontSize : BaseStyles._base_text_px_size,
                                textAlignVertical: 'center'
                            }, {color: '#333333'}]}>密码: </Text>
                        </View>
                        <TextInput style={[ {flex: 3,fontSize : BaseStyles._base_text_px_size}]} placeholder="请输入密码"
                                   placeholderTextColor="#cccccc"
                                   underlineColorAndroid="transparent"
                                   secureTextEntry={true}
                                   autoFocus={false}/>
                    </View>
                    <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                    <View style={{marginTop:BaseStyles._base_btn_dx_height}}>
                        <Button btntext="登录" onBtnClick={this._loginSuccess} btnHeight={48}
                                btncolor={BaseStyles._base_yellow}
                                btnTextColor="#fff" btnRadius={utils.dp2px(5)}/>
                    </View>

                    <View style={{marginTop: utils.dp2px(18),flexDirection:'row',justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            style={{justifyContent:'center',alignSelf:'center',height: BaseStyles._base_btn_dx_height}}
                            onPress={this._register}>
                            <Text
                                style={{color: '#ccc',fontSize: BaseStyles._base_text_px_size}}>注册新账号</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{justifyContent:'center',alignSelf:'center',height: BaseStyles._base_btn_dx_height}}
                            onPress={this._findPwd}>
                            <Text
                                style={{color: '#ccc',fontSize: BaseStyles._base_text_px_size}}>忘记密码</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 0.5,}}/>
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