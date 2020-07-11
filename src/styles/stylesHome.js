import {StyleSheet} from 'react-native'

  const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
    },
    upstyle: {
      height: 60,
      backgroundColor: '#A9A9A9',
      justifyContent: 'center',
      paddingHorizontal: 5
    },
    secondStyle: {
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 20,
      flexDirection: 'row',
      padding:0,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      
    },
    search: {
      fontSize: 15, 
      width: 260
    },
    item: {
      paddingHorizontal: 10,
      paddingTop: 10,
      fontSize: 20,
      flexDirection: 'column'
    },
    subtitle: {
      fontSize: 15,
      color: '#A9A9A9',
      paddingBottom: 10,
      paddingHorizontal: 10
    }
  });

export default stylesHome;