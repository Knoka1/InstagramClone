import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainRow: {flexDirection: 'row', height: 300},
  col: {flexDirection: 'row', width: '20%', height: 20, flex: 1},
});
