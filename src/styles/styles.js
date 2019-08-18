// global styles 
import {colors, fonts, padding, dimensions, align} from './base.js'
import {StyleSheet, Platform} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  signUpFont: {
    color:colors.red,
    fontSize:padding.ms
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'#8395a7'
  },
  loginText: {
    color:colors.red,
    padding:padding.sm,
    width:42
    },
    alignrow:{
      flexDirection:'row',
      flex:1,  
    },
    col:{
      flexDirection:'row',
       flexWrap:'wrap'
    },
    cardContainer:{
     width:'80%',
     backgroundColor:"#f8f8f8",
     padding:padding.sm,
     height:225,
     borderColor: colors.transparent,
     borderWidth: 1,
     marginTop:-padding.sm,
     borderRadius:10
    }, 
    messageBox:{
      width:'90%',
      paddingTop:5,
      alignItems:align.center,
      height:240
  },
  messageBoxTitleText:{
      fontWeight:'bold',
      color:colors.white,
      textAlign:align.center,
      fontSize:20,
      marginBottom:padding.sm
  },
  toolbar:{
    paddingTop:20,
    paddingBottom:padding.sm,
    flexDirection:'row'
     //Step 1
},
myText :{
  color:'white',
  fontSize : 20
},
toolbarButton:{
    width: 50,            //Step 2
    color:colors.white,
    textAlign:align.center
},
toolbarTitle:{
    color:colors.white,
    textAlign:align.center,
    fontWeight:'bold',
    flex:1,
    fontSize:16             //Step 3
 },
  messageBoxBodyText:{
      color:colors.white,
      fontSize:16
  },
  textContainer:{
    paddingTop:15,
    width:'95%',
    alignItems:'flex-end',
  },
  imgContainer:{
    padding:padding.sm,
    width:'90%',
    alignItems:'flex-start',
  },
  topText:{
    color:colors.white,
    textAlign:'left',
    fontSize:20,
    fontWeight:'bold'
  },
  splashLoading:{
    flex:1,
  justifyContent:align.center
  },
  imageContainer:{
    paddingTop:5,
    alignItems:align.center,
  },
  imageWidth:{
    width:70,
    height:70
  },
  centerAlign :{
   alignItems:align.center,
   paddingTop:70,
  },
  loginText:{
    color:colors.red,
  },
  textBorder:{
    borderBottomColor: colors.red,
    borderBottomWidth: 1
  },
  borderWidth : {
    paddingTop:2,
    width:42
  },
  borderWidthSignUp : {
    paddingTop:2,
    width:50
  },
  borderWidthForgot : {
    paddingTop:2,
    width:127
  },
  textInputContainer:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  textInputContainer2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop:padding.sm
  },
  iconWidth:{
    width:30,
    height:30
  },
  float:{
    flex: 1, 
    backgroundColor: '#f5fcff'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: align.center,
    alignItems: align.center,
    backgroundColor: colors.white,
},
searchIcon: {
    padding: padding.sm,
},
input: {
    flex: 1,
    paddingTop: padding.sm,
    paddingRight: padding.sm,
    paddingBottom: padding.sm,
    paddingLeft: 0,
    backgroundColor: colors.white,
    color: '#424242',
},
icon:{
  width:20,
  height:20,
  marginTop:12
},
socialIcon:{
  width:40,
  height:40,
  marginTop:12
},
border:{
  borderBottomColor: colors.black,
  borderBottomWidth: 1,
  flex:1
},
rowAlign:{
  flexDirection:'row',
  borderBottomColor: colors.black,
  borderBottomWidth: 1
},
loginContainer:{
  alignItems:align.center
},
buttonWidth:{
  width:300,
 
  marginTop:20
},
loginbutton:{
backgroundColor:colors.red,
color:colors.white,
width:70,
textAlign:align.center,
height:30,
borderRadius:padding.sm,
position:'relative',
bottom:14,
paddingTop:4,
 },
 paybutton:{
  backgroundColor:colors.red,
  color:colors.white,
 fontSize:20,
 width:125,
 marginTop:20,
marginLeft:25
 
   },
 center:{
   paddingTop:20,
   alignItems:align.center
 },
 connect:{
  paddingTop:20,
  alignItems:align.center,
  width:'40%'
},
 borderWidth2 : {
  paddingTop:2,
  width:128
},
textBorder2:{
  borderBottomColor: colors.black,
  borderBottomWidth: 1
},
rowAlign2:{
  flexDirection:'row',
  alignItems:align.center
},
rowAlign3:{
  flexDirection:'row',
  alignItems:align.center,
  paddingTop:5
},
textCenter:{
  textAlign:align.center,
  color:'white'
},
borderWidth3 : {
  paddingTop:18,
  width:'20%'
},
bottomText:{
  alignItems:align.center,
  paddingTop:padding.sm
},
cardContainerSignUp:{
  width:'80%',
  padding:padding.sm,
  borderColor: colors.black,
  borderWidth: 1,
  marginTop:-30,
  backgroundColor:colors.white,
 },
 cardContainerForgot:{
  width:'80%',
  padding:padding.sm,
  height:220,
  borderColor: colors.black,
  borderWidth: 1,
  marginTop:-40,
  backgroundColor:colors.white,
 },
 topSpace:{
   marginTop:0
 },
 signUpButton:{
  backgroundColor:colors.red,
  color:colors.white,
  width:83,
  textAlign:align.center,
  height:30,
  borderRadius:padding.sm,
  position:'relative',
  bottom:13,
  paddingTop:5,
   },
   forgotText:{
     paddingTop:padding.md,
     width:'100%',
     color:'white'
   },
   hamburgerIcon:{
     width:30,
     height:30,
    marginLeft:25},
    searchIcon:{
      width:30,
      height:30,
     marginRight:25},
     homeContent:{
       alignItems:align.center,
       width:'100%'
     },
     cardImage:{
       width:'90%',
       height:220,
       borderRadius:25,
     },
     sideMenu:{
     alignItems:align.center,
     },
    profilePic:{
      marginTop:20,
      borderRadius:100,
      width:80,
     height:80
    },
    userName:{
      paddingTop:padding.sm,
      color:colors.white
    },
    error:{
      color:colors.red,
      paddingTop:5
    },
    MainContainer :{
    
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
      margin:10
       
      },
       
      animatedToastView:
      {
         marginHorizontal: 30,
         paddingHorizontal: 25,
         paddingVertical: 10,
         borderRadius: 25,
         zIndex: 9999,
         position: 'absolute',
         justifyContent: 'center'
      },
      
      ToastBoxInsideText:
      {
         fontSize: 15,
         alignSelf: 'stretch',
         textAlign: 'center'
      },
      toast:{
        alignItems:align.center,
        marginTop:-40
      },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      footer:{
        position:'absolute',
        top:560
      },
      staticIcon:{
        width:25,
        height:20
      },
      forgotText:{
       paddingTop:padding.sm,
       color:'white'
      },
      textWidth:{
        width:'100%'
      },
      iconsAlign:{
      flexDirection:'row'
      
      },
      shareIcon:{
        width:25,
        height:25
      },
      viewWidth:{
        width:'42%'
      },
      viewWidthEmpty:{
        width:'16%'
      },
      rightAlign:{
        textAlign:'right'
      },
      white:{
        color:colors.white
      },
      topPadding:{
        paddingTop:padding.md
      },
      topMargin:{
        paddingTop:padding.sm
      },
      list:{
       
        flexDirection:'row',
        marginTop:20,
        flexWrap:'nowrap'
      },
      listIconsWidth:{
      width:'25%'
    },
    listItemsBlank:{
      width:10
    },
    listTextWidth:{
      width:230
    },
    listIconsWidth2:{
      width:60
    },
    listTextWidth2:{
      width:'60%'
    },
    listToggleIconWidth2:{
      width:'10%'
    },
    toggleIcon:{
      width:100,
      height:50
    },
    listTextFontSize:{
      fontSize:20,
      textAlign: "left",
      display:'flex'
    },
    switch:{
      width:70
    },
    cameraIcon:{
      position:'absolute', 
      bottom:20,
      width:35,
      top:62,
      left:164,
      height:35,
      overflow:'hidden'
    }
    
    
      

})