const USER_INFO = {
	1: {
		name: 'tom',
		age: 20
	},
	2: {
		name: 'sary',
		age: 23
	},
};

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableOpacity
} from 'react-native';

import FirstSceneComponent from './FirstSceneComponent';

export default class SecondSceneComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id: null
		};
	}

	componentDidMount() {
		this.setState({
			id: this.props.id
		});
	}


	_pressButton = () => {
		const {
			navigator
		} = this.props;

		if (this.props.getUser) {
			let user = USER_INFO[this.props.id];
			this.props.getUser(user);
		}

		if (navigator) {
			navigator.pop();
		}
	};

	render() {
		return (
			<View>
                <Text>获得的参数: id={ this.state.id }</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
		);
	}
}