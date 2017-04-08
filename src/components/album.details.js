/**
 * Created by kawnayeen on 4/8/17.
 */
import React from 'react';
import { Text, View, Image, Button, Linking } from 'react-native';
import Card from './card';
import CardSection from './card.section';


function onButtonPress(url) {
    Linking.openURL(url);
}

const AlbumDetails = ({ album }) => (
    <Card>
        <CardSection>
            <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnailStyle} source={{ uri: album.thumbnail_image }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleTextStyle}>{album.title}</Text>
                <Text>{album.artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image style={styles.coverImageStyle} source={{ uri: album.image }} />
        </CardSection>
        <CardSection>
            <View style={styles.buttonStyle}>
                <Button
                    onPress={() => onButtonPress(album.url)}
                    title="Buy Now"
                    accessibilityLabel="See an informative alert"
                />
            </View>
        </CardSection>
    </Card>
);

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    coverImageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default AlbumDetails;
