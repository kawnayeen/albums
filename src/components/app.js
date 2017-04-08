/**
 * Created by kawnayeen on 4/8/17.
 */
import React from 'react';
import { View } from 'react-native';
import Header from './header';
import AlbumList from './album.list';


const App = () => (
    <View>
        <Header headerText={'Albums!!!'} />
        <AlbumList />
    </View>
);

export default App;
