import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Divider } from 'react-native-elements';



type Props = {};
export default class DividerScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Dividers</Text>
                    <Divider style={{ opacity: 0, height: 10 }} />
                    <Divider style={{ backgroundColor: 'red', height: 1 }} />
                    <Divider style={{ opacity: 0, height: 3 }} />
                    <Divider style={{ backgroundColor: 'orange', height: 2 }} />
                    <Divider style={{ opacity: 0, height: 3 }} />
                    <Divider style={{ backgroundColor: 'yellow', height: 3 }} />
                    <Divider style={{ opacity: 0, height: 3 }} />
                    <Divider style={{ backgroundColor: 'green', height: 4 }} />
                    <Divider style={{ opacity: 0, height: 3 }} />
                    <Divider style={{ backgroundColor: 'blue', height: 5 }} />
                    <Divider style={{ opacity: 0, height: 3 }} />
                    <Divider style={{ backgroundColor: 'indigo', height: 6 }} />
                    <Divider style={{ opacity: 0, height: 3 }} />
                    <Divider style={{ backgroundColor: 'violet', height: 7 }} />

                    <Text>There is a divider below this text</Text>
                    <Divider style={{ opacity: 0, height: 1 }} />
                    <Text>There is a divider above this text</Text>
                    <Divider style={{ opacity: 0, height: 7 }} />

                    <Text>There is a divider below this text</Text>
                    <Divider style={{ opacity: 0, height: 6 }} />
                    <Text>There is a divider above this text</Text>
                    <Divider style={{ opacity: 0, height: 7 }} />

                    <Text>There is a divider below this text</Text>
                    <Divider style={{ opacity: 0, height: 11 }} />
                    <Text>There is a divider above this text</Text>
                    <Divider style={{ opacity: 0, height: 7 }} />

                    <Text>There is a divider below this text</Text>
                    <Divider style={{ opacity: 0, height: 16 }} />
                    <Text>There is a divider above this text</Text>
                    <Divider style={{ opacity: 0, height: 7 }} />
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
