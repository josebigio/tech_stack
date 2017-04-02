import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common'
import * as actions from '../actions';

class ListItem extends Component {

	onPress() {
		this.props.selectLibrary(this.props.library.id);
	}

	render() {
		console.log(this.props);
		const {titleStyle} = styles;
		return (
			<TouchableWithoutFeedback
			onPress={this.onPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{this.props.library.title}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}


export default connect(null,actions)(ListItem);