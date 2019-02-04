import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { Card, Text, ListItem, Button, Icon } from 'react-native-elements'



type Props = {};
export default class CardScreen extends Component<Props> {
    render() {
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
        ]
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Cards</Text>
                    <Text h5>Implemented without image with header</Text>
                    <Card title="CARD WITH DIVIDER">
                        {
                            users.map((u, i) => {
                                return (
                                    <View key={i} style={styles.user}>
                                        <Image
                                            style={styles.image}
                                            resizeMode="cover"
                                            source={{ uri: u.avatar }}
                                        />
                                        <Text style={styles.name}>{u.name}</Text>
                                    </View>
                                );
                            })
                        }
                    </Card>


                    <Text h5>Implemented without image without header, using ListItem component</Text>
                    <Card containerStyle={{ padding: 0 }} >
                        {
                            users.map((u, i) => {
                                return (
                                    <ListItem
                                        key={i}
                                        roundAvatar
                                        title={u.name}
                                        avatar={{ uri: u.avatar }}
                                    />
                                );
                            })
                        }
                    </Card>

                    <Text h5>implemented with Text and Button as children</Text>
                    <Card
                        title='HELLO WORLD'
                        image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}>
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW' />
                    </Card>
                </ScrollView>
            </View>
        )
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
