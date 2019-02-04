import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



type Props = {};
export default class InputScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Inputs</Text>
                    <Text h5>Point 1</Text>
                    <Input
                        placeholder='BASIC INPUT'
                    />

                    <Input
                        placeholder='INPUT WITH ICON'
                        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    />

                    <Input
                        placeholder='INPUT WITH CUSTOM ICON'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />

                    <Input
                        placeholder='INPUT WITH SHAKING EFFECT'
                        shake={true}
                    />

                    <Input
                        placeholder='INPUT WITH ERROR MESSAGE'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />
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
