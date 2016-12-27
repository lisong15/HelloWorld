/**
 * Created by liyang on 16/12/15.
 */
import React, {Component} from "react";
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    BackAndroid
} from "react-native";
import utils from "../utils/utils";
import baseStyles from "../styles/styles";
export default class EditInfo extends Component {

    defaultHeight = utils.dp2px(48);
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: '',
            textHint: '这是初始值',
            height: this.defaultHeight,
            name: ''
        };
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackPressed);
        let {text, textHint = this.state.textHint, height = this.defaultHeight, lName} = this.props;
        this.setState({
                          text: text,
                          textHint: textHint,
                          height: height,
                          name: lName
                      })
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

    _onTextChanged = (text = this.state.textHint) => {
        // alert(`你的结果是：${text}`);
        let {textChanged} = this.props;
        textChanged(text);
        this.setState({
                          text: text
                      });
    };


    _onDeleteAll = () => {
        this.setState({
                          textHint: '',
                          text: ''
                      });
        console.log('textHint: ' + this.state.textHint);
    };

    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                <View
                    style={{borderWidth:1,borderColor:'#fff',borderTopColor: '#fff',marginLeft:utils.dp2px(16),flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',backgroundColor: '#fff'}}>
                    {/*<Text*/}
                    {/*style={{fontSize:baseStyles._base_ctext_px_size,color: '#333333'}}>{this.state.name}</Text>*/}
                    <View style={{flex:0.1,marginLeft: utils.dp2px(10)}}>
                        <TextInput selectionColor={baseStyles._base_blue} placeholder={this.state.textHint}
                                   underlineColorAndroid="transparent"
                                   value={this.state.text}
                                   onChangeText={this._onTextChanged}
                                   placeholderTextColor="#000"
                                   style={{flex:1}} editable={true}/></View>
                    <TouchableOpacity
                        onPress={this._onDeleteAll}
                        style={{justifyContent: 'center',alignItems: 'flex-end',width: baseStyles._base_btn_dx_height,height: baseStyles._base_btn_dx_height}}>
                        <Image source={require('../../img/ic_X.png')} style={{marginRight: utils.dp2px(16)}}/>
                    </TouchableOpacity>

                </View>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
            </View>

        )
    }


}