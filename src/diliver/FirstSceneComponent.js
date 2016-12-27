import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    Button,
    ScrollView
} from "react-native";
import ttt from "../native_utils/AToast";

export default class FirstSceneComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            id: 2,
            user: null,
            imgUrl: null
        };
    }


    _getUser = (user = '') => {
        let _this = this;
        // this.state.id=3;
        // this.setState(this.state);
        _this.setState({
                           user: user
                       });
        alert(_this.state.id);
    };

    async _backFromNative() {
        try {
            let {
                msg,
                time
            } = await ttt.show('heheheh', ttt.SHORT);
            console.log(`收到的信息是：${msg} -> ${time}`);
        }
        catch (e) {
            console.error(e);
        }

    }

    /**
     * 选择图片
     */
    async _startPicker() {
        try {
            let a = await ttt.pickImage();
            // alert('picker : ' + a)
            console.log(`back url is  ${this.state.imgUrl} ${new Date()}`);
            this.setState({imgUrl: a});
            // alert('back url is ' + this.state.imgUrl);
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 弹出原生的toast
     */
    _pressButton = () => {
        // this._getUser();
        ttt.show('hello, i\'m native', ttt.SHORT);
        let _this = this;
        const {
            navigator
        } = this.props;
        // if (navigator) {
        //     navigator.push({
        //         name: 'SecondSceneComponent',
        //         component: SecondSceneComponent,
        //
        //         params: {
        //             id: this.state.id,
        //             getUser: (user) => {
        //                 _this.setState({
        //                     user: user
        //                 })
        //             }
        //             // getUser: function(user) {
        //             // 	_this.setState({
        //             // 		user: user
        //             // 	})
        //             // }
        //         }
        //     });
        // }
    };

    render() {
        console.log('back render is ' + this.state.imgUrl);
        if (this.state.user) {
            return (
                <View>
                    <Text >用户的信息是：{JSON.stringify(this.state.user)}</Text>
                </View>
            )
        } else if (this.state.imgUrl) {
            return (<View style={{justifyContent: 'center'}}>
                <Image style={{height: 300, width: 300}} resizeMode={'contain'}
                       source={{uri: this.state.imgUrl}}/>
            </View>)

        }
        else {
            return (<View>
                <TouchableOpacity onPress={this._startPicker.bind(this)}>
                    <Text style={{backgroundColor: 'gray'}}>查询ID为{this.state.id}的用户信息</Text>
                    <Image style={{height: 200, width: 200, backgroundColor: 'red',}} resizeMode={'contain'}
                           source={require('../../img/a.jpg')}>
                        <Text style={{alignSelf: 'center'}}>Inside</Text>
                    </Image>
                    <Button style={{borderRadius: 20, borderWidth: 30, width: 10, height: 20}}
                            onPress={this._pressButton}
                            title="Show Toast"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                            disabled={false}/>
                    {/*<ImageView style={{height: 300, width: 300}} color="grey" alpha={105}/>*/}
                    {/*<Bt style={{height: 30, width: 60}} text="原生button"/>*/}
                </TouchableOpacity>
                {/*<ScrollView horizontal={true} showsVerticalScrollIndicator={true}/>*/}
            </View>)
        }

    }
}