import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  list: {
    marginTop: '25%',
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
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonSearch:{
    width: 35,
    height: 35,
    backgroundColor: 'red'
  }

});

export { styles };