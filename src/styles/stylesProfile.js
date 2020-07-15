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
      height: 140,
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
      textAlign: 'center',
      marginHorizontal: 20,
      marginBottom: 4
      },
    additionalInfo: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 5
    },
    numbers: {
      textAlign: 'center',
      fontSize: 16
    },
    repoCard: {
      flexDirection: 'row',
      borderColor:'#DCDCDC',
      borderBottomWidth: 1
    }
});

export default stylesProfile;