import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common'
import * as actions from '../actions';

class ListItem extends Component {

	componentWillUpdate() {
		console.log('componentWillUpdate');
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library } = this.props;
		if(library.expanded) {
			return (
				<CardSection>
					<Text>{library.description}</Text>
				</CardSection>
			);
		}
	}

	render() {
		console.log(this.props);
		const {titleStyle} = styles;
		const { title, id } = this.props.library;
		return (
			<TouchableWithoutFeedback
				onPress={()=>{
					this.props.onPress(id);
				}}
			>
				<View>
					<Card>
						<CardSection>
							<Text style={titleStyle}>{title}</Text>
						</CardSection>
						{this.renderDescription()}
					</Card>
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

export default ListItem;