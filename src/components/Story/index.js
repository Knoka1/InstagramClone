import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from './styles';

const Story = ({item}) => {
  return (
    <View style={styles.storyContainer}>
      <View style={[{borderColor: item.new ? 'pink' : 'gray'}, styles.border]}>
        <Avatar.Image
          style={{backgroundColor: 'white'}}
          source={item.img}
          size={50}
        />
      </View>
      <Text style={styles.storyText} numberOfLines={1}>
        {item.text}
      </Text>
    </View>
  );
};

export default Story;
