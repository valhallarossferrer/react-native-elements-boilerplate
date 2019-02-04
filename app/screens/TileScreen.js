import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Tile } from 'react-native-elements';



type Props = {};
export default class TileScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Tile</Text>
                    <Text h5>Featured Tile</Text>
                    <Tile
                        imageSrc={{ uri: 'https://picsum.photos/200' }}
                        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                        featured
                        caption="Some Caption Text"
                    />
                    <Text h5>Featured Tile with Icon</Text>
                    <Tile
                        imageSrc={{ uri: 'https://picsum.photos/200' }}
                        icon={{ name: 'play-circle', type: 'font-awesome' }}
                        featured
                    />
                    <Text h5>Tile with Icon</Text>
                    <Tile
                        imageSrc={{ uri: 'https://picsum.photos/200' }}
                        title="Lorem ipsum dolor sit amet, consectetur"
                        icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
                        contentContainerStyle={{ height: 70 }}
                    >
                        <View
                            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Text>Caption</Text>
                            <Text>Caption</Text>
                        </View>
                    </Tile>
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
