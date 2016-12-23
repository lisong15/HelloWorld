/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';


import MyScene from './src/view/MyScene';
import FirstSceneComponent from './src/diliver/FirstSceneComponent';
import CusScrollView from './src/view/ScrollTest';
import RefreshControlExample from './src/view/RefreshScroll';
import ResonderT from './src/test/ResponderTest';
import animated from './src/test/animatedtest';
import Login from './src/standard/login';
import realms from './src/test/RealmTest';

export default class SimpleNavigationApp extends Component {

    render() {
        let defaultName = 'FirstSceneComponent';
        let defaultComponent = Login;
        return ( < Navigator initialRoute={
            {
                name: defaultName,
                component: defaultComponent
            }
            }
                             configureScene={
                                 (route) => {
                                     const animation = route.customAnimation || Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;
                                     const noGesture = {...animation,gestures:{}};
                                     return noGesture;
                                 }
                             }
                             renderScene={
                                 (route, navigator) => {
                                     let Component = route.component;
                                     return <Component {...route.params} navigator={navigator}/>
                                 }
                             }
            />
        );

    }
}

AppRegistry.registerComponent('HelloNative', () => SimpleNavigationApp);

// export default class HelloNative extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu this is end
//         </Text>
//       </View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF',
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });
// AppRegistry.registerComponent('HelloNative', () => HelloNative);
// import React, {
// 	Component,
// } from 'react';

// import {
// 	AppRegistry,
// 	StyleSheet,
// 	Platform,
// 	Text,
// 	View,
// 	Alert,
// 	TouchableOpacity,
// 	Linking,
// } from 'react-native';

// import {
// 	isFirstTime,
// 	isRolledBack,
// 	packageVersion,
// 	currentVersion,
// 	checkUpdate,
// 	downloadUpdate,
// 	switchVersion,
// 	switchVersionLater,
// 	markSuccess,
// } from 'react-native-update';

// import _updateConfig from './update.json';
// const {
// 	appKey
// } = _updateConfig[Platform.OS];

// export default class HelloNative extends Component {
// 	componentWillMount() {
// 		if (isFirstTime) {
// 			Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [{
// 				text: '是',
// 				onPress: () => {
// 					throw new Error('模拟启动失败,请重启应用')
// 				}
// 			}, {
// 				text: '否',
// 				onPress: () => {
// 					markSuccess()
// 				}
// 			}, ]);
// 		} else if (isRolledBack) {
// 			Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
// 		}
// 	}
// 	doUpdate = info => {
// 		downloadUpdate(info).then(hash => {
// 			Alert.alert('提示', '下载完毕,是否重启应用?', [{
// 				text: '是',
// 				onPress: () => {
// 					switchVersion(hash);
// 				}
// 			}, {
// 				text: '否',
// 			}, {
// 				text: '下次启动时',
// 				onPress: () => {
// 					switchVersionLater(hash);
// 				}
// 			}, ]);
// 		}).catch(err => {
// 			Alert.alert('提示', '更新失败.');
// 		});
// 	};
// 	checkUpdate = () => {
// 		checkUpdate(appKey).then(info => {
// 			if (info.expired) {
// 				Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [{
// 					text: '确定',
// 					onPress: () => {
// 						info.downloadUrl && Linking.openURL(info.downloadUrl)
// 					}
// 				}, ]);
// 			} else if (info.upToDate) {
// 				Alert.alert('提示', '您的应用版本已是最新.');
// 			} else {
// 				Alert.alert('提示', '检查到新的版本' + info.name + ',是否下载?\n' + info.description, [{
// 					text: '是',
// 					onPress: () => {
// 						this.doUpdate(info)
// 					}
// 				}, {
// 					text: '否',
// 				}, ]);
// 			}
// 		}).catch(err => {
// 			Alert.alert('提示', '更新失败.');
// 		});
// 	};
// 	render() {
// 		return (
// 			<View style={styles.container}>
//           <Text style={styles.welcome}>
//             欢迎使用热更新服务
//           </Text>
//           <Text style={styles.instructions}>
//             这是版本二 {'\n'}
//             当前包版本号: {packageVersion}{'\n'}
//             当前版本Hash: {currentVersion||'(空)'}{'\n'}
//           </Text>
//           <TouchableOpacity onPress={this.checkUpdate}>
//             <Text style={styles.instructions}>
//               点击这里检查更新
//             </Text>
//           </TouchableOpacity>
//         </View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF',
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });

// AppRegistry.registerComponent('HelloNative', () => HelloNative);