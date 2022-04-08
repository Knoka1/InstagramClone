import React from 'react';
import {View, Text, Image, ScrollView, Pressable, Button} from 'react-native';
;

import {Avatar, IconButton} from 'react-native-paper';

import Header from '../../components/Header';
import Story from '../../components/Story';
import Post from '../../components/Post';
import Footer from '../../components/Footer';
import styles from './styles';

const dummyStories = [
  {
    text: 'Guilhermao',
    img: require('../../resources/images/pessoa1.jpeg'),
  },
  {
    text: 'bro123',
    img: require('../../resources/images/pessoa2.jpg'),
    new: true,
  },
  {
    text: 'Mar02',
    img: require('../../resources/images/pessoa3.jpg'),
    new: true,
  },
  {
    text: 'joaozinho',
    img: require('../../resources/images/pessoa4.jpg'),
    new: true,
  },
  {
    text: 'Mariozinha',
    img: require('../../resources/images/pessoa5.jpg'),
    new: true,
  },
  {text: 'Mariozinha', img: require('../../resources/images/pessoa6.jpg')},
];
const dummyPost = [
  {
    text: 'joaogoto',
    avatarImg: require('../../resources/images/crosswalk.jpg'),
    postImg: require('../../resources/images/crosswalk.jpg'),
  },
  {
    text: 'Guilhermao',
    avatarImg: require('../../resources/images/pessoa1.jpeg'),
    postImg: require('../../resources/images/crosswalk.jpg'),
  },
];

const Home = ({navigation}) => {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* PaddingHorizontal cria espaçamento em ambos os lados */}
              {dummyStories.map((item, i) => (
                <Story key={i} item={item} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomColor: '#e1e6ea',
            borderBottomWidth: 1,
          }}
        />
        {dummyPost.map((item, i) => (
          <Post key={i} item={item} navigation={navigation} />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Home;
