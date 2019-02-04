import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Icon } from 'react-native-elements';



type Props = {};
export default class IconsScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Icons</Text>
                    <Text h5>Point 1</Text>
                    <View style={styles.flexRow}>
                        <Icon
                            name='rowing' />

                        <Icon
                            name='g-translate'
                            color='#00aced' />

                        <Icon
                            name='sc-telegram'
                            type='evilicon'
                            color='#517fa4'
                        />

                        <Icon
                            reverse
                            name='ios-american-football'
                            type='ionicon'
                            color='#517fa4'
                        />

                        <Icon
                            raised
                            name='heartbeat'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => console.log('hello')} />
                    </View>
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
