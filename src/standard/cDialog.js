/**
 * Created by liyang on 16/12/21.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch,
    Modal,
    PixelRatio,
    Dimensions
} from "react-native";
import Button from "./cButton";

const _base_ctext_px_size = (PixelRatio.get() / 1.5) * 16;
/**
 * 默认居中显示
 */
export default class SimpleModal extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        textContent: React.PropTypes.string.isRequired,
        leftBtnText: React.PropTypes.string.isRequired,
        rightBtnText: React.PropTypes.string.isRequired,
        leftOnClick: React.PropTypes.func.isRequired,
        rightOnClick: React.PropTypes.func.isRequired,
        isVisible: React.PropTypes.bool,
        btnWidth: React.PropTypes.number,
        btnHeight: React.PropTypes.number,

    };

    static defaultProps = {
        textContent: 'dialog内容',
        isVisible: false,
    };

    dp2px = (dp = 0) => {

        return (dp * (PixelRatio.get() / 1.5) + 0.5);
    };

    getWH = () => {
        return Dimensions.get('window');
    };

    render() {
        let {width:btnWidth} = this.getWH();
        console.log('cDilaog render in is: ' + !!this.props.btnWidth + '/' + !!this.props.btnHeight + '/' +
                    !this.props.btnHeight + btnWidth / (2.5 * 2) + '/' + this.props.btnHeight);
        return (<Modal animationType={'none'} onRequestClose={()=>{!vis}}
                       transparent={true} visible={true}>
            <View
                style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#00000081'}}>
                <View
                    style={{borderRadius:15,backgroundColor: '#fff',width: this.props.btnWidth||btnWidth/2.5,height:this.props.btnHeight||btnWidth/(2.5*2)}}>
                    <View
                        style={{flex:(btnWidth/(2.5*2))/this.dp2px(48)-1.5,justifyContent: 'center',alignItems:'center'}}>
                        <Text
                            style={{color:'#000',fontSize:_base_ctext_px_size}}>{this.props.textContent}</Text>

                    </View>
                    <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                    <View style={{flex:1,flexDirection: 'row',justifyContent: 'space-between'}}>
                        <Button btntext={this.props.leftBtnText} btnWidth={btnWidth/(2.5*2)}
                                btnHeight={48}
                                onBtnClick={this.props.leftOnClick}
                                btnTextColor="#000" btnRadius={this.dp2px(0)}/>
                        <View style={{backgroundColor: '#d9d9d9', width: 1}}/>
                        <Button btntext={this.props.rightBtnText} btnWidth={btnWidth/(2.5*2)}
                                btnHeight={48}
                                onBtnClick={this.props.rightOnClick}
                                btnTextColor="#000" btnRadius={this.dp2px(0)}/>
                    </View>
                </View>

            </View>
        </Modal>)
    }
}
