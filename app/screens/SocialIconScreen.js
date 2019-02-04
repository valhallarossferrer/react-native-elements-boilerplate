import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SocialIcon, Text } from 'react-native-elements';



type Props = {};
export default class SocialIconScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Social Icon</Text>
                    <Text h5>Icon</Text>
                    <SocialIcon
                        type='twitter'
                    />

                    <SocialIcon
                        raised={false}
                        type='gitlab'
                    />

                    <SocialIcon
                        light
                        type='medium'
                    />

                    <SocialIcon
                        light
                        raised={false}
                        type='medium'
                    />


                    <Text h5>Button</Text>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />

                    <SocialIcon
                        title='Some Twitter Message'
                        button
                        type='twitter'
                    />

                    <SocialIcon
                        button
                        type='medium'
                    />

                    <SocialIcon
                        button
                        light
                        type='instagram'
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
