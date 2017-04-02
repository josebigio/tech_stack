import React, { Component } from 'react';
import { Text, View } from 'react-native';

const styles = {
		containerStyle : {
			borderWidth: 1,
			borderRadius: 2,
			borderColor: '#ddd',
			borderBottomWidth: 0,
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2},
			elevation: 2,
			marginLeft: 5,
			marginRight: 5,
			marginTop: 10
		}
};


class Card extends Component {

	render() {
		return (
			<View style={styles.containerStyle}>{this.props.children}</View>
		);
	}
};

export { Card };