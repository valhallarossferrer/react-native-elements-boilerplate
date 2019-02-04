import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Text, ListItem } from 'react-native-elements';



type Props = {};
export default class ListItemScreen extends Component<Props> {

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
                title: item.name[0]
            }}
        />
    )

    render() {
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://picsum.photos/50',
                subtitle: 'Vice President',
                icon: 'av-timer',   
                title: 'Appointments',
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://picsum.photos/50',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff',
                title: 'Trips',
            }
        ]
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>ListItem</Text>
                    <Text h5>Using Map Function - Implemented with avatar</Text>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }

                    <Text h5>Using Map Function - Implemented with link and icon</Text>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                            />
                        ))
                    }
                    <Text h5>Using RN FlatList - Implemented with link and avatar</Text>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
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
