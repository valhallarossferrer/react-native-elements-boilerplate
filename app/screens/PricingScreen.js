import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, PricingCard } from 'react-native-elements';



type Props = {};
export default class PricingScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Pricing</Text>
                    <Text h5>Point 1</Text>
                    <PricingCard
                        color="#4f9deb"
                        title="Free"
                        price="$0"
                        info={['1 User', 'Basic Support', 'All Core Features']}
                        button={{ title: 'GET STARTED', icon: 'flight-takeoff', buttonStyle: { justifyContent: "space-evenly" } }}
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
