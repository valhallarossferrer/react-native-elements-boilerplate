import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Badge, Icon, withBadge, Text } from 'react-native-elements';


type Props = {};

const BadgedIcon = withBadge(1)(Icon)

export default class BadgeScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Badges</Text>
                    <Text h5>Standard badge</Text>
                    <View style={styles.flexColumn}>
                        <Badge value="0" status="error" />
                        <Badge value="1" status="error" />
                        <Badge value="10" status="error" />
                        <Badge value="99+" status="error" />
                    </View>


                    <Text h5>Mini badge</Text>
                    <View style={styles.flexColumn}>
                        <Badge status="success" />
                        <Badge status="error" />
                        <Badge status="primary" />
                        <Badge status="warning" />
                    </View>



                    <Text h5>Avatar with Mini badge</Text>
                    <View style={styles.flexColumn}>
                    <View>
                            <Avatar
                                rounded
                                source={{
                                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                                }}
                                size="large"
                            />

                            <Badge
                                status="success"
                                containerStyle={{ position: 'absolute', top: 5, right: 5 }}
                            />
                        </View>

                    </View>

                    <Text h5>With baddge HOC</Text>
                    <View style={styles.flexColumn}>
                        <BadgedIcon type="ionicon" name="ios-chatbubbles" />
                    </View>



                   
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
