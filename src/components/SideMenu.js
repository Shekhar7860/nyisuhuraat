import React, {Component} from 'react';
import {ScrollView, Text, View, ImageBackground, Switch, Image, TouchableOpacity ,Alert, TouchableNativeFeedback} from 'react-native';
import Service from '../services/Service';
import Constants from '../constants/Constants';
import { LoginManager} from 'react-native-fbsdk';
// import { GoogleSignin } from 'react-native-google-signin';

class SideMenu extends Component {
  constructor(props){
    super(props);
   // console.log('propvalue', props);
    service = new Service();
    constants = new Constants();
    this.state = {
       userFbData: { picture_large:{ data:{}}},
       userGoogleData:{},
       name:"",
       names: [
        {
           id: 0,
           name: 'Home',
           icon:constants.homeIcon
        },
        {
           id: 1,
           name: 'Offers',
           icon:constants.offerIcon
        },
        {
           id: 2,
           name: 'Favourite',
           icon:constants.favIcon
        },
        {
           id: 3,
           name: 'Top up Sizzerz Credits',
           icon:constants.creditIcon,
        },
        {
          id: 4,
          name: 'Help',
          icon:constants.helpIcon,
       }
     ]
     }; 
}

takePicture = () => {
  const options = {};
  this.camera.capture({ metadata: options })
  .then((data) => console.log(data))
  .catch(err => console.error(err));
}
logOut = () =>{
  Alert.alert(
    'Log Out',
    'Are you Sure? You want to Log Out', [{
        text: 'Cancel',
        style: 'cancel'
    },
    {
        text: 'OK',
        onPress: () => 
        this.exit()
    }, ], {
        cancelable: false
    }
 )
  
}

exit = () => {
  LoginManager.logOut();
  try {
    // GoogleSignin.signOut();
    this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
  this.props.navigation.navigate('Login')
}
alertItemName = (item) => {
  alert(item.name)
}
componentDidMount() {
//  console.log('newVal', service.getUserData('user'))
  service.getUserData('user').then((keyValue) => {
   
    var parsedData = JSON.parse(keyValue);
    console.log("localstorage", parsedData);
  if(parsedData.picture_large != undefined)
  {
   this.setState({userFbData: parsedData, name:"fb"});
  }
  else if(parsedData.photo != "")
  {
    this.setState({userGoogleData: parsedData, name:"google"});
  }
  


    }, (error) => {
    console.log(error) //Display error
  });
  
 } 
 

  render () {
   // console.log("Fbdata",  this.state.userFbData, "GoogleData", this.state.userGoogleData)
  
  const  NewImage =   <Image source={constants.defaultImage} style={styles.profilePic} />
   const fbImage = <Image source={{uri: this.state.userFbData.picture_large.data.url}} style={styles.profilePic} />;
   const GoogleImage = <Image source={{uri: this.state.userGoogleData.photo }} style={styles.profilePic} />;
   const fbName = <Text style={styles.userName}>{this.state.userFbData.name}</Text>
   const GoogleName = <Text style={styles.userName}>{this.state.userGoogleData.name}</Text>

      
     var userImage;
     var userName;
        if (this.state.name == "fb") {
              if(fbImage.props.source.uri !== null){
                userImage =  fbImage
              }
              else
              {
                userImage = NewImage
              }
              userName = fbName
        } 
        else if(this.state.name == "google")
         {
         
                if(GoogleImage.props.source.uri !== null){
                  userImage = GoogleImage
                }
                else
                {
                  userImage = NewImage
                }
                userName = GoogleName
        }
        else
        {
          userImage = NewImage
        }
      
      
    return (
     
      <ImageBackground
      source={constants.loginbg}
      style={styles.container}>
        <View style={styles.sideMenu}>
          {userImage}
          {userName}
          <TouchableNativeFeedback onPress = {() => this.takePicture()}>
                  <Image source={constants.cameraIcon} style={styles.cameraIcon}/>
          </TouchableNativeFeedback>
            <View style={[styles.iconsAlign, styles.topPadding]}>
                <TouchableNativeFeedback style={styles.viewWidth} >
                  <Image source={constants.shareIcon} style={styles.shareIcon}/>
                </TouchableNativeFeedback>
                <View style={styles.viewWidthEmpty}></View>
                <TouchableNativeFeedback style={styles.viewWidth}>
                  <Image source={constants.starIcon} style={styles.shareIcon}/>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.iconsAlign}>
                <View style={styles.viewWidth}>
                  <Text style={[styles.white, styles.rightAlign]}>Share</Text>
                </View>
                <View style={styles.viewWidthEmpty}></View>
                <View style={styles.viewWidth}>
                <Text style={styles.white}>Reviews</Text>
                </View>
            </View>
            <View style={styles.topMargin}> 
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <View style={styles.list}>
                       <TouchableNativeFeedback style={styles.listIconsWidth}>
                          <Image source={item.icon} style={styles.shareIcon}/>
                        </TouchableNativeFeedback>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>{item.name}</Text>
                        </View>
                     </View>
                  </TouchableOpacity>
               ))
            }
            <View style={styles.list}>
                       <TouchableNativeFeedback style={styles.listIconsWidth2}>
                          <Image source={constants.notificationIcon} style={styles.shareIcon}/>
                        </TouchableNativeFeedback>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth2}>
                           <Text style={styles.listTextFontSize}>Notifications</Text>
                        </View>
                        <TouchableNativeFeedback style={styles.listToggleIconsWidth2}>
                        <Switch style={styles.switch}
                        onValueChange={isSwitchOn => this.setState({isSwitchOn})}
                        value={this.state.isSwitchOn} 
                         />
                        </TouchableNativeFeedback>
            </View>
         </View>
          
              <TouchableOpacity  style={styles.footer} onPress={() => this.logOut()}>
                   <View style={styles.list}>
                       <TouchableNativeFeedback style={styles.listIconsWidth2}>
                          <Image source={constants.logoutIcon} style={styles.shareIcon}/>
                        </TouchableNativeFeedback>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>LOGOUT</Text>
                        </View>
                     </View>
              </TouchableOpacity >
        </View>
   </ImageBackground>
     
     
    );
  }
}



export default SideMenu;