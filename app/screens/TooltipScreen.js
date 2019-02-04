import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Tooltip, Avatar } from 'react-native-elements';



type Props = {};
export default class TooltipScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Page Title</Text>
                    <Tooltip
                        width={150}
                        popover={<Text>Info here</Text>}
                        containerStyle={{ transform: [{ translateX: -24 }] }}
                    >
                        <Avatar
                            size="small"
                            rounded
                            title="MT"
                            activeOpacity={0.7}
                        />
                    </Tooltip>
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
