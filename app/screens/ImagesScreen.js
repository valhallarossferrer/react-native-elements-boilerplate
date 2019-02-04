import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Image } from 'react-native';
import { Text } from 'react-native-elements';



type Props = {};
export default class ImagesScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Images</Text>
                    <Text h5>Point 1</Text>
                    <Image
                        source={{ uri: 'https://picsum.photos/300' }}
                        style={{ width: 200, height: 200, resizeMode: 'cover' }}
                    />


                    <Image
                        source={{ uri: 'https://picsum.photos/50' }}
                        style={{ width: 200, height: 200, resizeMode: 'stretch' }}
                        PlaceholderContent={<ActivityIndicator />}
                        placeholderStyle={{backgroundColor: 'gray'}}
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
