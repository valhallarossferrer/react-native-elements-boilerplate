import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';



type Props = {};
export default class TextScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Text</Text>
                    <Text h1>Heading 1</Text>
                    <Text h2>Heading 2</Text>
                    <Text h3>Heading 3</Text>
                    <Text h4>Heading 4</Text>
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
