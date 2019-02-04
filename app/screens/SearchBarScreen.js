import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, SearchBar } from 'react-native-elements';



type Props = {};
export default class SearchBarScreen extends Component<Props> {
    constructor() {
        super()
        this.state = {
            search: '',
        }
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Seacrh Bar</Text>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                        lightTheme={true}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
    },

    flexColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
});
