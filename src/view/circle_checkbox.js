/**
 * Created by liyang on 16/12/8.
 */
import React, {Component} from "react";
import {View, Text, TouchableOpacity, TabBarIOS} from "react-native";

let state = 0;//1选中，0未选中
let default_radius = 25;

export default class CircleBox extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            radius: default_radius,
            bgc: '#02cad7',
            isChecked: false
        };
    }


    _pressed() {
        let {id, onCheck} = this.props;
        onCheck(id);
    }

    componentWillMount() {

        this.setState({
            radius: this.props.radius,
        });
    }

    render() {
        let color = this.props.checked ? this.state.bgc : '#fff';
        return (<View style={{justifyContent: 'center',alignItems: 'center',}}>
            <TouchableOpacity
                onPress={this._pressed.bind(this)}
                style={{backgroundColor: color,width:this.state.radius,height: this.state.radius ,borderRadius: this.state.radius/2,borderColor: '#d9d9d9',borderWidth: 1}}>
            </TouchableOpacity>

        </View>)
    }
}
