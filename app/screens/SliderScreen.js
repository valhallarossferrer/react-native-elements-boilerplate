import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Slider } from 'react-native-elements';



type Props = {};
export default class SliderScreen extends Component<Props> {
    state = {
        value: 30
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Slider</Text>
                    <Slider
                        value={this.state.value}
                        step={1}
                        maximumValue={30}
                        manimumValue={0}
                        onValueChange={value => this.setState({ value })}
                    />
                    <Text>Value: {this.state.value}</Text>
                    <View style={styles.flexRow}></View>
                    <View style={styles.flexColumn}></View>
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
