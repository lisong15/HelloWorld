/**
 * Created by liyang on 16/11/28.
 */
import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    ScrollView,
    TouchableHighlight
} from "react-native";

export  default class animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
        }
    }

    //
    //     componentDidMount() {
    //         this.spin();
    //     }
    //
    //     spin() {
    //         this.spinValue.setValue(0);
    //         Animated.timing(
    //             this.spinValue,
    //             {
    //                 toValue: 1,
    //                 duration: 4000,
    //                 easing: Easing.linear
    //             }
    //         ).start(() => this.spin());
    //     }
    //
    //     render() {
    //         const spin = this.spinValue.interpolate({
    //             inputRange: [0, 1],
    //             outputRange: ['0deg', '360deg']
    //         });
    //         return (
    //             <View style={styles.container}>
    //                 <Animated.Image
    //                     style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
    //                     source={require('../../img/a.jpg')} />
    //                 {/*source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>*/}
    //             </View>
    //         )
    //     }
    // }
    //
    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         justifyContent: 'center',
    //         alignItems: 'center'
    //     }
    // });

    //     animate(easing) {
    //         this.animatedValue.setValue(0);
    //         Animated.timing(
    //             this.animatedValue,
    //             {
    //                 toValue: 1,
    //                 duration: 1000,
    //                 easing
    //             }
    //         ).start();
    //     }
    //
    //     render() {
    //         const marginLeft = this.animatedValue.interpolate({
    //             inputRange: [0, 1],
    //             outputRange: [0, 660]
    //         });
    //         return (
    //             <View style={styles.container}>
    //                 <Animated.View style={[styles.block, {marginLeft} ]}/>
    //                 <ScrollView>
    //                     <Text style={{textAlign: 'center'}}>Scroll up for more animations</Text>
    //                     <Button easing='Bounce' onPress={this.animate.bind(this, Easing.bounce)}/>
    //                     <Button easing='Cubic' onPress={this.animate.bind(this, Easing.cubic)}/>
    //                     <Button easing='Back' onPress={this.animate.bind(this, Easing.back(2))}/>
    //                     <Button easing='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))}/>
    //                     <Button easing='Ease' onPress={this.animate.bind(this, Easing.ease)}/>
    //                     <Button easing='InOut' onPress={this.animate.bind(this, Easing.inOut(Easing.quad))}/>
    //                     <Button easing='In' onPress={this.animate.bind(this, Easing.in(Easing.quad))}/>
    //                     <Button easing='Out' onPress={this.animate.bind(this, Easing.out(Easing.quad))}/>
    //                     <Button easing='Sin' onPress={this.animate.bind(this, Easing.sin)}/>
    //                     <Button easing='Linear' onPress={this.animate.bind(this, Easing.linear)}/>
    //                     <Button easing='Quad' onPress={this.animate.bind(this, Easing.quad)}/>
    //                 </ScrollView>
    //             </View>
    //         );
    //     }
    // }
    //
    // const Button = ({onPress, easing}) => (
    //     <TouchableHighlight style={styles.button} onPress={onPress}>
    //         <Text>{easing}</Text>
    //     </TouchableHighlight>
    // );
    //
    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         marginTop: 60
    //     },
    //     button: {
    //         height: 60,
    //         marginLeft: 10,
    //         marginRight: 10,
    //         backgroundColor: '#ededed',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         marginTop: 10
    //     },
    //     block: {
    //         width: 50,
    //         height: 50,
    //         backgroundColor: 'red'
    //     }
    // });


    componentDidMount() {
        this.animate()
    }

    animate() {
        this.state.animatedValue.setValue(0);
        Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {
        const marginLeft = this.state.animatedValue.interpolate({
                                                                    inputRange: [0, 1],
                                                                    outputRange: [0, 300]
                                                                });
        const opacity = this.state.animatedValue.interpolate({
                                                                 inputRange: [0, 0.5, 1],
                                                                 outputRange: [0, 1, 0]
                                                             });
        const movingMargin = this.state.animatedValue.interpolate({
                                                                      inputRange: [0, 0.5, 1],
                                                                      outputRange: [0, 300, 0]
                                                                  });
        const textSize = this.state.animatedValue.interpolate({
                                                                  inputRange: [0, 0.5, 1],
                                                                  outputRange: [18, 32, 18]
                                                              });
        const rotateX = this.state.animatedValue.interpolate({
                                                                 inputRange: [0, 0.5, 1],
                                                                 outputRange: ['0deg', '180deg', '0deg']
                                                             });
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red'}}/>
                <Animated.View
                    style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue'}}/>
                <Animated.View
                    style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange'}}/>
                <Animated.Text
                    style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green'}}>
                    Animated Text!
                </Animated.Text>
                <Animated.View
                    style={{
            transform: [{rotateX}],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: 'black'}}>
                    <Text style={{color: 'white'}}>Hello from TransformX</Text>
                </Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         paddingTop: 150
                                     }
                                 });
