import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import {Avatar, IconButton} from 'react-native-paper';
import styles from './styles';

const Post = ({item, navigation}) => {
  return (
    <View>
      <View style={[styles.row]}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <View
            style={[{flexDirection: 'row', padding: 5, alignItems: 'center'}]}>
            <Avatar.Image
              style={{backgroundColor: 'white', marginRight: 10}}
              source={item.avatarImg}
              size={38}
            />
            <Text style={[{color: 'black'}]}>{item.text}</Text>
          </View>
        </Pressable>
        <IconButton
          labelStyle={{color: '#000000'}}
          icon="dots-horizontal"
          mode="text"></IconButton>
      </View>
      <Image style={{width: 450, height: 350}} source={item.postImg} />
      {/* Usar espaçamentos dentro da View apenas */}
      <View style={[styles.row]}>
        <View style={styles.row}>
          <IconButton
            style={{marginRight: 4}}
            labelStyle={{color: '#000000'}}
            icon="heart-outline"
            mode="text"></IconButton>
          <IconButton
            style={{marginRight: 4}}
            labelStyle={{color: '#000000'}}
            icon="comment-outline"
            mode="text"></IconButton>
          <IconButton
            style={{marginRight: 4}}
            labelStyle={{color: '#000000'}}
            icon="send"
            mode="text"></IconButton>
        </View>
        <IconButton
          labelStyle={{color: '#000000'}}
          icon="bookmark-outline"
          mode="text"></IconButton>
      </View>
      <View style={[styles.row, {justifyContent: 'flex-start'}]}>
        <Avatar.Image
          source={require('../../resources/images/pessoa7.jpg')}
          size={38}
        />
        <Text> Liked by TransferoGroup and others</Text>
      </View>
      <View style={[styles.row, {paddingBottom: 1}]}>
        <Text style={styles.dateText}>November 12</Text>
      </View>
      <View
        style={{
          borderBottomColor: '#e1e6ea',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default Post;
