import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image } from 'react-native';
import { CheckBox, Text, Divider } from 'react-native-elements';



type Props = {};
export default class CheckBoxScreen extends Component<Props> {
    constructor() {
        super()
        this.state = {
            isChecked: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>CheckBox</Text>

                    <CheckBox
                        title='Click Here'
                        checked={this.state.isChecked}
                    />

                    <CheckBox
                        center
                        title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                    />

                    <Divider style={{ backgroundColor: 'blue', height: 10}}/>
                    <CheckBox
                        center
                        title='Click Here to Remove This Item'
                        iconRight
                        iconType='material'
                        checkedIcon='clear'
                        uncheckedIcon='add'
                        checkedColor='red'
                        checked={this.state.checked}
                    />

                    <Text h5>With icon from assets</Text>
                    <CheckBox
                        title='Click Here'
                        checkedIcon={<Image source={require('../assets/checked.png')} />}
                        uncheckedIcon={<Image source={require('../assets/unchecked.png')} />}
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
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
