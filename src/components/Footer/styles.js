import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainRow: {flexDirection: 'row', height: 300},
  col: {width: '20%', height: 20, flex: 1},
  dateText: {fontSize: 8, color: 'gray'},
});
