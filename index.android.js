import React from 'react';
import {
    AppRegistry
} from 'react-native';

import App from './src/components/app';

const AlbumApplication = () => (
    <App />
);

AppRegistry.registerComponent('albums', () => AlbumApplication);
