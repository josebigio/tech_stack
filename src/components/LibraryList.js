import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import * as actions from '../actions';


class LibraryList extends Component {

	buildList() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	onPress(id) {
		console.log('LibraryList onPress: ' + id,this);
		this.props.selectLibrary(id);
	}

	renderRow(library) {
		const { id } = library.id;
		return (
			<ListItem
				library={library}
				onPress={this.onPress.bind(this)}
			/>
		);
	}
	
	render() {
		this.buildList();	
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow.bind(this)}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		libraries:state.libraries,
	};
};

export default connect(mapStateToProps,actions)(LibraryList);