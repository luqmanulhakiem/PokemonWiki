import { StyleSheet } from "react-native";

export const Homestyles = StyleSheet.create({
    noData: {
        margin: 'auto',
    },
    main: {
      padding: 16,
      backgroundColor: 'white',
      height: '100%',
      width: '100%'
    }, 
    fontfamily: {
      fontFamily: 'Poppins Regular',
      color: 'black'
    },
    section1: {
      alignContent: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    textHeader: {
      fontSize: 28,
    },
    inputSearch: {
      backgroundColor: '#D5D5D5',
      borderRadius: 10,
      paddingLeft: 25,
      width: 280
    },
    searchBar: {
      marginTop: 34,
      alignContent: 'flex-start',
      flexDirection: 'row',
    },
    btnSearch: {
      margin: 'auto',
      height: 50,
      width: 72,
      backgroundColor: '#F6BD20',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    grid: {
      marginTop: 34,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    cardItem: {
      marginRight: 20,
      marginBottom: 20,
      backgroundColor: '#F6BD20',
      width: 169,
      borderColor: '#F6BD20',
      borderWidth: 1,
      borderRadius: 10,
      padding: 1,
      overflow: 'hidden',
    },
    cardImage: {
      height: 156,
      width: 169,
    },
    cardText: {
      fontSize: 17,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      marginTop: 10,
      color: 'white'
    }
  })