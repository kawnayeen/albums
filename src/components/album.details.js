/**
 * Created by kawnayeen on 4/8/17.
 */
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './card.section';

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
    }
};

export default AlbumDetails;
