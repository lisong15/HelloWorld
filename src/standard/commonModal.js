/**
 * Created by liyang on 16/12/21.
 */
import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Switch, Modal} from "react-native";
import utils from "../utils/utils";
import Button from "./Button";
import BaseStyles from "../styles/styles";

/**
 * 默认居中显示
 */
export default class CommonModal extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        textContent: React.PropTypes.string.isRequired,
        leftBtnText: React.PropTypes.string,
        rightBtnText: React.PropTypes.string,
        leftOnClick: React.PropTypes.func,
        rightOnClick: React.PropTypes.func,
        isVisible: React.PropTypes.bool,
    };

    static defaultProps = {
        textContent: 'dialog内容',
        isVisible: false,
    };

    render() {
        let {width:btnWidth} = utils.getWH();
        return (<Modal animationType={'none'} onRequestClose={()=>{!vis}}
                   transparent={true} visible={true}>
                <View
                    style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#00000081'}}>
                    <View style={{borderRadius:15,backgroundColor: '#fff',width:btnWidth/2.5,height: btnWidth/(2.5*2)}}>
                        <View
                            style={{flex:(btnWidth/(2.5*2))/utils.dp2px(48)-1.5,justifyContent: 'center',alignItems:'center'}}>
                            <Text
                                style={{color:'#000',fontSize:BaseStyles._base_ctext_px_size}}>{this.props.textContent}</Text>

                        </View>
                        <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                        <View style={{flex:1,flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Button btntext="取消" btnWidth={btnWidth/(2.5*2)}
                                    btnHeight={48}
                                    onBtnClick={this.props.leftOnClick}
                                    btnTextColor="#000" btnRadius={utils.dp2px(0)}/>
                            <View style={{backgroundColor: '#d9d9d9', width: 1}}/>
                            <Button btntext="确认" btnWidth={btnWidth/(2.5*2)}
                                    btnHeight={48}
                                    onBtnClick={this.props.rightOnClick}
                                    btnTextColor="#000" btnRadius={utils.dp2px(0)}/>
                        </View>
                    </View>

                </View>
            </Modal>)
    }
}
