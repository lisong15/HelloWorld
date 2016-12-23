const React = require('react');
const ReactNative = require('react-native');
const {
    ScrollView,
    StyleSheet,
    RefreshControl,
    Text,
    TouchableWithoutFeedback,
    View,
    Platform,
    BackAndroid,
    AppState,
    Vibration,
    TouchableHighlight
} = ReactNative;

import ttt from "../native_utils/AToast";

const styles = StyleSheet.create({
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});


const Row = React.createClass({
    _onClick: function () {
        this.props.onClick(this.props.data);
        console.log('this is onClick' + Platform.Version);
    },
    render: function () {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' row clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    },
});

const RefreshControlExample = React.createClass({
    statics: {
        title: '<RefreshControl>',
        description: 'Adds pull-to-refresh support to a scrollview.'
    },

    componentWillMount() {
        if (Platform.OS == 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this._onBackPressed);
            AppState.addEventListener('change', this._handleAppStateChange);
        }
    },
    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress', this._onBackPressed);
        AppState.removeEventListener('change', this._handleAppStateChange);
    },
    getInitialState() {
        return {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(2)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
        };
    },

    _onBackPressed()
    {
        ttt.show('您点击了返回键', ttt.SHORT);
        const nav = this.navigator;
        if (!nav) {
            return true;
        }
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    },

    _handleAppStateChange(currentAppState) {
        console.log(`当前状态是：` + currentAppState);
    },
    _onClick(row) {
        row.clicks++;
        row.abc = "lmn";
        this.setState({
            rowData: this.state.rowData,
        });
    },

    render() {
        return (
            <TouchableHighlight
                style={styles.wrapper}
                onPress={() => Vibration.vibrate([100, 300, 300, 300])}>
                <View style={styles.button}>
                    <Text>Vibrate</Text>
                </View>
            </TouchableHighlight>
        );
    },
    // render() {
    //     const rows = this.state.rowData.map((row2, ii) => {
    //         return <Row key={ii} data={row2} onClick={this._onClick}/>;
    //     });
    //     return (
    //         <ScrollView
    //             style={styles.scrollview}
    //             refreshControl={
    //                 <RefreshControl
    //                     refreshing={this.state.isRefreshing}
    //                     onRefresh={this._onRefresh}
    //                     tintColor="#ff0000"
    //                     title="Loading..."
    //                     titleColor="#00ff00"
    //                     colors={['#ff0000', '#00ff00', '#0000ff']}
    //                     progressBackgroundColor="#ffff00"
    //                 />
    //             }>
    //             {rows}
    //         </ScrollView>
    //     );
    // },

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(2))
                .map((val, i) => ({
                    text: 'Loaded row ' + ((this.state.loaded + i)),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 2,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 1000);
    },
});

module.exports = RefreshControlExample;