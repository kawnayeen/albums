/**
 * Created by kawnayeen on 4/8/17.
 */
import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetails = (props) => (
    <View>
        <Text>{props.album.title}</Text>
    </View>
);

export default AlbumDetails;
