import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common'
import * as actions from '../actions';

class ListItem extends Component {

	renderDescription() {
		const { expanded, library } = this.props;
		if(expanded) {
			return <Text>{library.description}</Text>
		}
	}

	render() {
		const {titleStyle} = styles;
		const { title, id } = this.props.library;
		return (
			<TouchableWithoutFeedback
			onPress={()=>this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
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

const mapStateToProps = (state, ownProps) =>{
	const expanded = state.selectLibraryId === ownProps.library.id;
	return {expanded};
};

export default connect(mapStateToProps,actions)(ListItem);