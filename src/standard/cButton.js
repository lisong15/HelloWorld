/**
 * Created by liyang on 16/12/21.
 */
import React, {Component} from "react";
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    BackAndroid,
    PixelRatio
} from "react-native";


const _base_ctext_px_size = (PixelRatio.get() / 1.5) * 16;
export default class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _onButtonClick = () => {
        let {onBtnClick} = this.props;
        onBtnClick && onBtnClick();
    };
    dp2px = (dp = 0) => {

        return (dp * (PixelRatio.get() / 1.5) + 0.5);
    };

    render() {
        let {btntext:text, btncolor:color, btnHeight:height, btnWidth:width, btnTextColor:textcolor, btnRadius:btnRadius} = this.props;
        // console.log('Button width is ' + !!width);
        return (<View>
            <TouchableOpacity
                onPress={this._onButtonClick}
                style={{borderRadius:btnRadius,alignItems: 'center',justifyContent: 'center',height:this.dp2px(height),width:!!width ? width:width,backgroundColor: color}}>
                <Text
                    style={[{fontSize:_base_ctext_px_size,color: textcolor}]}>{text}</Text>
            </TouchableOpacity>
        </View>)
    }
}
