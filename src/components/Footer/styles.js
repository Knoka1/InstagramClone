import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: width,
    padding: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS === 'android' ? height - 70 : height, //Aplicação de estilo de acordo com plataforma OS
    zIndex: 10,
    backgroundColor: 'white',
  },
  mainRow: {flexDirection: 'row', height: 300},
  col: {width: '20%', height: 20, flex: 1},
  dateText: {fontSize: 8, color: 'gray'},
});
console.log(height);
