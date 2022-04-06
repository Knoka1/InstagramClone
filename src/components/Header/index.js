import React from 'react';

import {View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';

import styles from './styles';
const Header = ({navigation}) => {
  return (
    <View style={[styles.row]}>
      <View style={[styles.row]}>
        <Text
          style={{
            fontFamily: 'FontsFree-Net-Billabong',
            fontSize: 26,
            color: 'black',
          }}>
          {' '}
          Instagram
        </Text>
      </View>
      <View style={[styles.row]}>
        <IconButton
          labelStyle={{color: '#000000'}}
          icon="plus-box-outline"
          mode="text"></IconButton>
        <IconButton
          labelStyle={{color: '#000000'}}
          icon="heart-outline"
          mode="text"></IconButton>
        <IconButton
          labelStyle={{color: '#000000'}}
          icon="message-text-outline"
          mode="text"></IconButton>
      </View>
    </View>
  );
};

export default Header;
