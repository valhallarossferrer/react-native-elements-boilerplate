import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Overlay } from 'react-native-elements';



type Props = {};
export default class OverlayScreen extends Component<Props> {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Overlay</Text>
                    <Text h5>Point 1</Text>
                    <Button
                        title="Open Overlay"
                        onPress={() => {
                            this.setState({ isVisible: true })
                        }}
                    />
                    <Overlay
                        isVisible={this.state.isVisible}
                        onBackdropPress={() => this.setState({ isVisible: false })}>
                        <Text>Hello from Overlay!</Text>
                    </Overlay>
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
