import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';
import { Button, Avatar, ListItem, Text } from 'react-native-elements';



type Props = {};
export default class Avatars extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{padding: 20}}>
                    <Text h3>Avatars</Text>
                    <Text h5>Avatar with initials</Text>
                    <View style={styles.flexRow}>
                        <Avatar
                            size="small"
                            rounded
                            title="MT"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="medium"
                            title="BP"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="large"
                            title="LW"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="xlarge"
                            rounded
                            title="CR"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <Text h5>Avatar with icons</Text>
                    <View style={styles.flexColumn}>
                        <Avatar
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ marginBottom: 10 }}
                        />
                        <Avatar
                            size="small"
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ marginBottom: 10 }}
                        />
                        <Avatar
                            size="medium"
                            overlayContainerStyle={{ backgroundColor: 'blue' }}
                            icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ marginBottom: 10 }}
                        />
                        <Avatar
                            size="large"
                            icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
                            overlayContainerStyle={{ backgroundColor: 'white' }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ marginBottom: 10 }}
                        />

                        <Avatar
                            size="xlarge"
                            rounded
                            icon={{ name: 'home', type: 'font-awesome' }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ marginBottom: 10 }}
                        />
                        <Avatar
                            size={200}
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ marginBottom: 10 }}
                        />

                    </View>

                    <Text h5>Avatar with title placeholder</Text>
                    <View>
                        <ListItem
                            leftAvatar={{
                                title: 'A',
                                source: { uri: 'https://picsum.photos/50' },
                                showEditButton: true,
                            }}
                            title={'Valhalla Ross Ferrer'}
                            subtitle={'Mobile App Developer'}
                            chevron
                        />

                        <ListItem
                            leftAvatar={{
                                title: 'A',
                                source: { uri: 'https://picsum.photos/50' },
                                showEditButton: true,
                            }}
                            title={'Valhalla Ross Ferrer'}
                            subtitle={'Mobile App Developer'}
                            chevron
                        />

                        <ListItem
                            leftAvatar={{
                                title: 'A',
                                source: { uri: 'https://picsum.photos/50' },
                                showEditButton: true,
                            }}
                            title={'Valhalla Ross Ferrer'}
                            subtitle={'Mobile App Developer'}
                            chevron
                        />
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
