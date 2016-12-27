/**
 * Created by 1 on 2016/11/16.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    PanResponder,
    Dimensions
} from "react-native";
import baseStyles from "../styles/styles";
let _width = Dimensions.get('window').width;

export default class ResponderTest extends Component {


    _panResponder = {};
    _previousLeft = 0;
    _previousTop = 0;
    _circleStyles = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            numberActiveTouches: 0,
            moveX: 0,
            moveY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0
        };
    }

    _handleStartResponder = () => {
        return true;
    };

    _handleShouldMoveResponder = () => {
        return true;
    };
    _handleGrantResponder = () => {
        this._highLight();
    };
    _handleMoveResponder = (e, gestState) => {
        this.setState({
                          x0: gestState.x0,
                          y0: gestState.y0,
                          moveX: gestState.moveX,
                          moveY: gestState.moveY,
                          dx: Math.round(gestState.dx),
                          dy: Math.round(gestState.dy),
                          numberActiveTouches: gestState.numberActiveTouches,
                      });

        this._previousLeft = this.state.moveX;
        this._previousTop = this.state.moveY;


        // this._updatePosition();
        this._circleStyles = {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'red',
            position: 'absolute',
            left: this._previousLeft,
            top: this._previousTop
        };
        console.log(`_updatePosition info ` + Math.round(this._previousLeft) + ' previousLeft : ' +
                    Math.round(this._previousTop) + '/' + Dimensions.get('window').width + '/' +
                    Dimensions.get('window').height);
        this.refs.cc && this.refs.cc.setNativeProps({style: this._circleStyles});
    };

    _handleEndResponder = () => {
        this._unHighLight();
        this._previousLeft = 0;
        this._previousTop = 0;
    };

    _updatePosition = () => {

    };

    _highLight = () => {
        this.refs.cc && this.refs.cc.setNativeProps({style: {backgroundColor: 'green'}});
    };

    _unHighLight = () => {
        this.refs.cc && this.refs.cc.setNativeProps({style: {backgroundColor: 'blue'}});
    };

    componentWillMount() {
        console.log(`this is normal info: ${baseStyles.scalingFactors.normal}  ${Math.round(_width)}`);
        this._panResponder = PanResponder.create({
                                                     onStartShouldSetResponder: this._handleStartResponder,
                                                     onMoveShouldSetPanResponder: this._handleShouldMoveResponder,
                                                     onPanResponderGrant: this._handleGrantResponder,
                                                     onPanResponderMove: this._handleMoveResponder,
                                                     onPanResponderRelease: this._handleEndResponder,
                                                     onPanResponderTerminate: this._handleEndResponder,
                                                 });

        this._previousLeft = 20;
        this._previousTop = 100;
        this._circleStyles = {
            left: this._previousLeft,
            top: this._previousTop
        };
    }

    componentDidMount() {
        this._updatePosition();
    }

    render() {
        return (<View style={styles.container} {...this._panResponder.panHandlers}>
            <Text style={[baseStyles.fonts.normal, styles.scale]}>
                {this.state.numberActiveTouches} touches,
                dx:{this.state.dx},
                dy:{this.state.dy},
            </Text>
            <View style={baseStyles.styles.button}
                  ref="cc">
            </View>
        </View>)
    }

}


const styles = StyleSheet.create({
                                     circle: {
                                         width: 40,
                                         height: 40,
                                         borderRadius: 20,
                                         backgroundColor: 'blue',
                                         position: 'absolute',
                                         left: 0,
                                         top: 0,
                                     },
                                     container: {
                                         flex: 1,
                                         paddingTop: 64,
                                         // justifyContent: 'center',
                                         alignItems: 'center',
                                         backgroundColor: 'gray'
                                     },
                                     circleStyles: {
                                         left: 0,
                                         top: 0
                                     },
                                     scale: {
                                         fontSize: 18,
                                     }
                                 })
    ;
