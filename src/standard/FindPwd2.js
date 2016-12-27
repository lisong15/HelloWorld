/**
 * Created by liyang on 16/12/2.
 */
import React, {Component} from "react";
import {
    View,
    Text,
    BackAndroid,
    StyleSheet,
    Dimensions,
    TextInput,
    PixelRatio,
    TouchableOpacity
} from "react-native";
import BaseStyles from "../styles/styles";
import HeadView from "./commonHeadView";
import utils from "../utils/utils";
import CircleBox from "../view/circle_checkbox";
import FindPwd3 from "./FindPwd3";
import Button from "./Button";

export default class FindPwd2 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            flag: 1
        };
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


    _toPwd3 = () => {
        let {nv} = this.props;
        if (nv) {
            nv.push({
                        name: 'find pwd2',
                        component: FindPwd3,
                        params: {
                            name: 'first pwd2',
                            nv: nv
                        }
                    })
        }
    };

    /**
     * 选中之后的回调
     * @param abc
     * @private
     */
    _check_callback = (abc) => {
        // alert('return result: ' + abc)
        this.setState({
                          flag: abc
                      });
        if (abc === 1) {
            alert(`你选择了第一种方式`);
            return;
        }
        alert(`你选择了第二种方式`);
    };

    _onBack = () => {
        utils.onBack(this.props.nv, '');
    };

    render() {
        return ( <View style={{flex: 1, }}>
            {/*<View style={{flex: 0.5,backgroundColor: 'white'}}/>*/}
            <HeadView nv={this.props.nv} text="找回方式" onBackClick={this._onBack}/>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.5,}}/>

                <View style={{flex: 1, flexDirection: 'column',margin:utils.dp2px(94),}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: BaseStyles._base_text_px_size,marginBottom: utils.dp2px(13)}}>
                            找回密码的方式
                        </Text>
                    </View>
                    <View style={{backgroundColor: '#d9d9d9', height: 1}}/>

                    <View style={{flexDirection: 'row',alignItems: 'center',marginTop: utils.dp2px(20)}}>
                        <CircleBox id={1} onCheck={this._check_callback} radius={16}
                                   bgc="aqua" checked={this.state.flag === 1}/>
                        <Text
                            style={{marginLeft: utils.dp2px(5),fontSize: BaseStyles._base_text_px_size}}>
                            找回密码的方式2
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row',marginTop: utils.dp2px(20)}}>
                        <CircleBox id={2} onCheck={this._check_callback} radius={16} bgc="aqua"
                                   checked={this.state.flag === 2}/>
                        <Text style={{marginLeft: utils.dp2px(5),fontSize: BaseStyles._base_text_px_size}}>
                            找回密码的方式3
                        </Text>
                    </View>


                    {/*<View style={{flexDirection: 'row'}}>*/}
                    {/*<TouchableOpacity*/}
                    {/*onPress={this._toPwd3}*/}
                    {/*style={[{marginTop:BaseStyles._base_btn_dx_height},BaseStyles.views._btn_common]}>*/}
                    {/*<Text*/}
                    {/*style={BaseStyles.views._common_text}>下一步</Text>*/}
                    {/*</TouchableOpacity>*/}

                    <View style={{marginTop:BaseStyles._base_btn_dx_height}}>
                        <Button btntext="下一步" onBtnClick={this._toPwd3} btnHeight={48}
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