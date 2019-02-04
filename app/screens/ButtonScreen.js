import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';
import { Button, Avatar, ListItem, Text, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



type Props = {};
export default class ButtonScreen extends Component<Props> {
    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Buttons</Text>
                    {/* <Text h3>Avatar with initials</Text> */}

                    <View style={styles.flexColumn}>
                        <Button
                            title="Solid Button"
                        />

                        <Button
                            title="Outline button"
                            type="outline"
                        />

                        <Button
                            title="Clear button"
                            type="clear"
                        />

                        <Button
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Button with icon component"
                        />

                        <Button
                            icon={{
                                name: "arrow-right",
                                size: 15,
                                color: "white"
                            }}
                            title="Button with icon object"
                        />

                        <Button
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                />
                            }
                            iconRight
                            title="Button with right icon"
                        />

                        <Button
                            title="Loading button"
                            loading
                        />


                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{ height: 100 }}
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
