import React from 'react';
import {View} from 'react-native';

import {Avatar, IconButton} from 'react-native-paper';

import styles from './styles';

const Footer = ({navigation}) => {
  return (
    <View style={[styles.row]}>
      <IconButton
        labelStyle={{color: '#000000'}}
        icon="home"
        mode="text"></IconButton>
      <IconButton
        labelStyle={{color: '#000000'}}
        icon="search-web"
        mode="text"></IconButton>
      <IconButton
        labelStyle={{color: '#000000'}}
        icon="video-outline"
        mode="text"></IconButton>
      <IconButton
        labelStyle={{color: '#000000'}}
        icon="shopping"
        mode="text"></IconButton>
      <Avatar.Icon
        style={{marginTop: 3, backgroundColor: 'white'}}
        icon="account-circle-outline"
        size={38}
      />
    </View>
  );
};
export default Footer;
