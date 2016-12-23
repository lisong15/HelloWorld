import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Navigator, ScrollView, RefreshControl} from "react-native";

// 视图

export default class CustomScrollView extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isRefreshing: false,
        };
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 5000);
    }


    renderItem() {
        // 数组
        let itemAry = [];
        // 颜色数组
        let colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
        let index = 0;
        // 遍历
        for (const element of colorAry) {
            index++;
            itemAry.push(
                <View key={index} style={[styles.itemStyle, {backgroundColor: element}]}/>
            );
        }
        return itemAry;
    }


    render() {
        return (
            <ScrollView style={styles.mainStyle} horizontal={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._onRefresh.bind(this)}
                                tintColor="#ff0000"
                                title="Loading..."
                                titleColor="#00ff00"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                            />
                        }>
                {this.renderItem()}
            </ScrollView>
        );
    }
}
// 样式
let styles = StyleSheet.create({
    scrollViewStyle: {
        // 背景色
        backgroundColor: 'red'
    },

    itemStyle: {
        // 尺寸
        width: 1000,
        height: 200
    },
});