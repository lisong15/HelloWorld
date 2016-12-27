/**
 * Created by liyang on 16/12/15.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Switch
} from "react-native";
import utils from "../utils/utils";
import bStyles from "../styles/styles";

export default class SimpleItem extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sHeight: bStyles._base_btn_dx_height,
            leftHintText: '',
            rightHintText: '',
            switchIsOpen: false,
            isShowRHintText: true,
            isShowRightIcon: false,
            isShowCenterIcon: false,
            bgc: '',
            isHead: false
        };
    }

    componentWillMount() {
        let {bgc = '#fff', isHead, item_height = bStyles._base_btn_dx_height, leftHintText = '...', rightHintText, opened, isRHintIcon, isRHintText, isCenterIcon} = this.props;
        this.setState({
                          sHeight: item_height,
                          leftHintText: leftHintText,
                          rightHintText: rightHintText,
                          switchIsOpen: opened,
                          isShowRightIcon: isRHintIcon,
                          isShowRHintText: isRHintText,
                          isShowCenterIcon: isCenterIcon,
                          bgc: bgc,
                          isHead: isHead
                      })
    }

    _onValueChanged = (a) => {
        this.setState({isOpen: a});
    };

    _onClicked = () => {
        let {aa, id} = this.props;
        console.log(`_onClicked before `);
        if (aa) {
            requestAnimationFrame(() => {
                aa(!this.state.opened && this.state.rightHintText, !this.state.isHead && this.state.leftHintText,
                   this._changedText, id);
                console.log(`_onClicked in ${this.state.rightHintText}`);
            })
        }
        // this._changedText();

    };

    _changedText = () => {
        let {isNeedChanged, changedText} = this.props;
        console.log(isNeedChanged + ' *** ' + changedText);
        this.setState({
                          rightHintText: isNeedChanged ? changedText : this.state.rightHintText
                      });
    };

    render() {
        let {isNeedChanged, changedText} = this.props;
        console.log(`render in ${isNeedChanged} ${changedText}`);
        let abc = isNeedChanged ? changedText : this.state.rightHintText;
        return (<TouchableOpacity onPress={this._onClicked}
                                  style={{backgroundColor: this.state.bgc,height: this.state.sHeight,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',paddingLeft:utils.dp2px(16),paddingRight:utils.dp2px(16)}}>
            <View
                style={{flex:5,flexDirection: 'row',justifyContent: 'space-between'}}>
                {!this.state.isHead &&
                 <Text style={{fontSize:bStyles._base_ctext_px_size,color: '#000'}}>{this.state.leftHintText}</Text>}
                {this.state.isHead && !this.state.isShowCenterIcon &&
                 <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                     <Image source={require('../../img/a.jpg')}
                            style={{height: utils.dp2px(100),width: utils.dp2px(100)}}/>
                     <View style={{marginLeft: utils.dp2px(12),justifyContent: 'space-around'}}>
                         <Text style={{fontSize:bStyles._base_ctext_px_size,color: '#000'}}>李同学</Text>
                         <Text style={{fontSize:bStyles._base_ctext_px_size,color: '#000'}}>账号:ltx</Text>
                     </View>
                 </View>}
                {this.state.isShowCenterIcon &&
                 <View style={{justifyContent: 'space-around'}}>
                     <Text style={{fontSize:bStyles._base_ctext_px_size,color: '#000'}}>{this.state.leftHintText}</Text>
                 </View>}
                {this.state.isShowCenterIcon && <Image source={require('../../img/a.jpg')}
                                                       style={{height: utils.dp2px(100),width: utils.dp2px(100)}}/>}

                <View
                    style={{flexDirection:'row',alignItems: 'center'}}>

                    {this.state.isShowRHintText &&
                     <Text
                         style={{fontSize:bStyles._base_ctext_px_size,color: '#000'}}>{isNeedChanged ? abc :
                                                                                       this.state.rightHintText}</Text>}
                    {this.state.switchIsOpen &&
                     <TouchableOpacity style={{alignItems: 'center',marginLeft:utils.dp2px(10)}}>
                         <Switch disabled={false} onValueChange={this._onValueChanged} value={this.state.isOpen}/>
                     </TouchableOpacity>}
                    {this.state.isShowRightIcon &&
                     <Image style={{marginLeft:utils.dp2px(10)}} source={require('../../img/right.png')}/>}
                </View>
            </View>

            {/*{this.state.isShowCenterIcon &&*/}
            {/*<Text style={{fontSize:bStyles._base_ctext_px_size,color: '#000'}}>{this.state.leftHintText}</Text>}*/}
            {/*<View style={{flexDirection:'row',alignItems: 'center'}}>*/}
            {/*{this.state.switchIsOpen && <TouchableOpacity style={{alignItems: 'center',marginLeft:utils.dp2px(10)}}>*/}
            {/*<Switch disabled={false} onValueChange={this._onValueChanged} value={this.state.isOpen}/>*/}
            {/*</TouchableOpacity>}*/}
            {/*{this.state.isShowRightIcon &&*/}
            {/*<Image style={{marginLeft:utils.dp2px(10)}} source={require('../../img/right.png')}/>}*/}
            {/*</View>*/}
        </TouchableOpacity>)
    }
}