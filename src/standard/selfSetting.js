/**
 * Created by liyang on 16/12/15.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Image,
    TouchableOpacity,
    Switch
} from "react-native";
import BaseStyles from "../styles/styles";
import utils from "../utils/utils";
import HeadView from "./commonHeadView";
import SimpleItem from "./simpleItem";
import ModifyInfo from "./modifyInfo";
import Mine from "./mine";

export default class SettingCenter extends Component {
    result = '';
    toChanged;
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            flag: 1
        };
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackPressed);
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

    _getMName = (name, id) => {
        console.log('~~~~~~~_getMName is : ' + name + '/' + id);
        this.result = '';
        this.result = name;
        this.setState({flag: id}, this.toChanged);
        // this.toChanged();
    };

    _onClick = (title, name, callBack, id) => {
        // alert('你店里 ' + title);
        requestAnimationFrame(() => {
            this.toChanged = callBack;
            let {nv} = this.props;
            if (nv) {
                nv.push({
                            name: 'modify info',
                            component: id !== 0 ? ModifyInfo : Mine,
                            params: {
                                nv: nv,
                                title: name,
                                textHint: title,
                                lName: title,
                                id: id,
                                backInfo: this._getMName
                            }
                        })
            }
        });

    };

    _onBack = () => {
        utils.onBack(this.props.nv, '');
    };

    render() {
        console.log('^^^^^^^render_getMName is : ');
        return (<View style={{flex:1,backgroundColor: '#f2f2f2'}}>
            <HeadView nv={this.props.nv} text="个人中心" hasIcon={true} onBackClick={this._onBack}/>
            <View style={{backgroundColor: '#d9d9d9', height: 1,marginTop: utils.dp2px(16)}}/>
            <SimpleItem id={0} aa={this._onClick} isHead={true} item_height={utils.dp2px(132)} leftHintText="直接进入课堂"
                        rightHintText="七年级"
                        opened={false} isRHintIcon={true} isRHintText={false}/>
            <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
            <View style={{marginTop: utils.dp2px(16)}}>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                <SimpleItem id={1} aa={this._onClick} item_height={BaseStyles._base_btn_dx_height} leftHintText="学校"
                            rightHintText="振新小学" isNeedChanged={this.state.flag==1} changedText={this.result}
                            opened={false} isRHintIcon={true} isRHintText={true}/>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                <SimpleItem id={2} aa={this._onClick} item_height={BaseStyles._base_btn_dx_height} leftHintText="班级"
                            rightHintText="七年级" isNeedChanged={this.state.flag==2} changedText={this.result}
                            opened={false} isRHintIcon={true} isRHintText={true}/>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
            </View>

            <View style={{marginTop: utils.dp2px(16)}}>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>


                <SimpleItem id={3} aa={this._onClick} isHead={false} item_height={BaseStyles._base_btn_dx_height}
                            leftHintText="直接进入课堂"
                            rightHintText="七年级"
                            isNeedChanged={this.state.flag==3} changedText={this.result}
                            opened={true} isRHintIcon={true} isRHintText={false}/>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>

                <SimpleItem id={4} aa={this._onClick} item_height={BaseStyles._base_btn_dx_height} leftHintText="每页显示行数"
                            rightHintText="100"
                            isNeedChanged={this.state.flag==4} changedText={this.result}
                            opened={false} isRHintIcon={true} isRHintText={true}/>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                <SimpleItem id={5} aa={this._onClick} item_height={BaseStyles._base_btn_dx_height} leftHintText="作业时间"
                            rightHintText="1天"
                            isNeedChanged={this.state.flag==5} changedText={this.result}
                            opened={false} isRHintIcon={true} isRHintText={true}/>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                <SimpleItem id={6} aa={this._onClick} item_height={BaseStyles._base_btn_dx_height}
                            leftHintText="错题本复习时间"
                            rightHintText="3天"
                            isNeedChanged={this.state.flag==6} changedText={this.result}
                            opened={false} isRHintIcon={true} isRHintText={true}/>
                <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
            </View>
        </View>)
    }
}