import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Rating, AirbnbRating } from 'react-native-elements';



type Props = {};
export default class RatingScreen extends Component<Props> {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {

        const FIRE_IMAGE = require('../assets/fire.png')
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text h3>Rating</Text>
                    <Text h5>Point 1</Text>
                    <AirbnbRating />

                    <AirbnbRating
                        count={11}
                        reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                        defaultRating={11}
                        size={20}
                    />

                    <Rating
                        showRating
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />

                    <Rating
                        type='heart'
                        ratingCount={3}
                        imageSize={60}
                        showRating
                        onFinishRating={this.ratingCompleted}
                    />


                    <Rating
                        type='custom'
                        ratingImage={FIRE_IMAGE}
                        ratingColor='#3498db'
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={10}
                        imageSize={30}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />

                    <Rating
                        imageSize={20}
                        readonly
                        startingValue={5}
                        style={{ paddingVertical: 10 }}
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
