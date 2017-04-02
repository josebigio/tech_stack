import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card } from './common'
class ListItem extends Component {

	render() {
		const { rowData } = this.props;
		return (
			<Card>
				<CardSection><Text>{rowData.title}</Text></CardSection>
				<CardSection><Text>{rowData.description}</Text></CardSection>
			</Card>
		);
	}
}

export default ListItem;