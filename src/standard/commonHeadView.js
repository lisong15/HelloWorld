/**
 * Created by song on 2016/11/17.
 */
import React, {Component} from "react";
import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from "react-native";
import base_styles from "../styles/styles";
export default class BaseHeaderView extends Component {

// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    _onBackPressed = () => {
        // console.log(`${this.props.nm} ${this.props.dp} ${this.props.nv}`);
        const {nv} = this.props;
        if (!nv) {
            return true;
        }
        let {onBackClick} = this.props;
        if (onBackClick) {
            onBackClick();
        }

        // if (this.props.backInfo) {
        //     this.props.getUser(user);
        // }
        // const routers = nv.getCurrentRoutes();
        // console.log('current route: ' + routers[routers.length - 1].name);
        // if (routers.length > 1) {
        //     nv.pop();
        // return true;
        // }
        // return false;
    };

    render() {
        let {text, hasIcon = {true}} = this.props;
        return (<View style={[base_styles.views._head_view,{justifyContent:'center'}]}>
            <View style={{flex:1,flexDirection:'row'}}>
                { hasIcon && <TouchableOpacity
                    style={{justifyContent:'center',alignSelf:'center',width:base_styles._base_btn_dx_height,height: base_styles._base_btn_dx_height}}
                    onPress={this._onBackPressed}>
                    <Image source={require('../../img/back.png')} style={{alignSelf:'center'}}
                    />
                </TouchableOpacity>}
                <View style={{flex:1,justifyContent: 'center',marginRight: base_styles._base_btn_dx_height}}>
                    <Text
                        style={{fontSize:base_styles._base_text_px_size,alignSelf:'center'}}>
                        {`${text}`}
                    </Text>
                </View>

            </View>
        </View>)
    }
}
