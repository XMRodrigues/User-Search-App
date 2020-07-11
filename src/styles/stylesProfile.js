import {StyleSheet} from 'react-native'

  const stylesProfile = StyleSheet.create({
    container: {
      flex: 2
    },
    header: {
      height: 150,
      backgroundColor: '#A9A9A9',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mid: {
      height: 150,
      backgroundColor: '#A9A9A9',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    login: {
      fontFamily: 'HelveticaNeue',
      fontSize: 24,
      fontWeight: 'bold'
    },
    description: {
      fontSize: 14,
      color: 'black',
    },
    additionalInfo: {
      fontSize: 24,
      fontFamily: 'HelveticaNeue',
      fontWeight: 'bold'
    }
});

export default stylesProfile;