import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    listItem: {
      backgroundColor: '#FFFF',
      marginTop: 20,
      marginHorizontal: 30,
      padding: 15,
      height: 320,
      borderRadius:8
    },
    imageContainer:{
        height: 130,
        width: 130,
        alignSelf:'center',
        borderRadius: 65,
        borderWidth: 3      
    },
    infoContainer:{
        margin: 20,
        height: 130,
        alignItems: 'center',
        paddingVertical: 5
    },
    image:{
        height: 125,
        width: 125,
        alignSelf:'center',
        borderRadius: 65,
        justifyContent: 'center'  
    },
    largeImage:{
        height: 300,
        width: 300,
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius:8
    },
    bold: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    normalText:{
        justifyContent: 'center',
        alignItems: 'center', 
    }
  });

export {styles};