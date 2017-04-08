/**
 * Created by kawnayeen on 4/8/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetails from './album.details';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        // eslint-disable-next-line
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => this.setState({ albums: responseData }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetails key={album.title} album={album} />);
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
