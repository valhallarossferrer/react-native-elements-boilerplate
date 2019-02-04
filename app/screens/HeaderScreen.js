import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { Text, Header, Divider } from 'react-native-elements';



type Props = {};
export default class HeaderScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Header</Text>
                    <Text h5>Header with default components</Text>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                    <Divider style={{ opacity: 0, height: 20 }} />

                    <Text h5>Header customisability</Text>
                    <Header
                        statusBarProps={{ barStyle: 'light-content' }}
                        barStyle="light-content" // or directly
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        containerStyle={{
                            backgroundColor: '#3D6DCC',
                            justifyContent: 'space-around',
                            height: Platform.OS === 'ios' ? 70 : 70 - 24,
                            paddingTop: 0,
                            marginHorizontal: -20
                        }}
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
