import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flexGrow: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: window.width,
    height: window.height
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  list: {
    height: '20%'
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSearchHeader:{
    marginTop: '25%',
    marginBottom: 5,
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonSearch:{
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { styles };