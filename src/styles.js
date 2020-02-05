import { StyleSheet } from 'react-native';
import { colors } from './colors';

const generalStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  centerView:{
    alignItems: 'center',
    alignSelf: "center"
  },
  topView:{
    flex:1, 
    marginTop:20,
  },
  mT20:{
    marginTop:20
  },
  logoFullWidth:{
    width: "100%"
  },
});
const loginStyles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center'
  },
  textInput:{
    marginLeft:20,
    marginRight:20,
    height:50,
    marginBottom:10,
    textAlign:'center',
    color:colors.black
  },
   log:{
     marginTop:30,
     height:50,
     
   },
   logText:{
     color:'white',
     fontSize: 15,
     textAlign:'center',
     justifyContent: 'center',
     marginBottom:30
   },
   backgroundImage: {
     flex: 1,
     alignSelf: 'stretch',
   },
   header: {
     backgroundColor: colors.blue,
     height:75
   },
   headerText: {
     color: colors.white,
     fontSize: 40,
     textAlign:"center"
   }, 
   footer:{
     flex: 1,
     justifyContent: 'flex-end',
     marginBottom: 10
   },
   BottomBtn:{
     alignSelf: "center",
   }
 });
 const listStyles = StyleSheet.create({
  TextArea:{flex:1, flexDirection: 'row', marginBottom:3, backgroundColor: colors.white, width:"99%"},
  Image:{width: "30%", height: 100, margin: 5},
  MainText:{fontSize:18, marginBottom: 15, width:"69%"},
 });
const colorStyles = StyleSheet.create({
  whiteText:{
    color:colors.white,
  }
});
const positionStyles = StyleSheet.create({
  w100p:{width:"100%"},
  w50p:{width:"50%"},
  s20:{fontSize:20}, 
  s18:{fontSize:18},
  s16:{fontSize:16}
});
const tableStyles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30},
  wrapper: { flexDirection: 'row', width:"100%"},
  title: { flex: 3 },
  row: {  height: 100  },
  image: {height: 200, width: "100%"}
});
export {
  generalStyles,
  loginStyles,
  listStyles,
  colorStyles,
  positionStyles,
  tableStyles
}