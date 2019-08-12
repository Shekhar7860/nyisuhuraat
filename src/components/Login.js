import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ToastAndroid, ImageBackground, BackAndroid, DeviceEventEmitter,  BackHandler, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
// import { GoogleSignin } from 'react-native-google-signin';
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
import Service from '../services/Service';
import Constants from '../constants/Constants';
import CustomToast from './CustomToast';
import Loader from './Loader';
import RNPaypal from 'react-native-paypal-lib';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      emailError:'',
      passwordError:'',
      emailFormatError:'',
      loading: false
    }
    service = new Service();
    constants = new Constants();
   
  }


    componentDidMount = () => {
      var myarray = [];
  let n = 7;
  for ( i = 0; i<=n ; i++){
    if (n%i == 0 ){
       myarray.push(i)
    }
  }
  console.log('myarray', myarray)
  }
 
  fbSignIn = () =>{
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        if(result.isCancelled == false)
        {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
                this.getUserProfile(data.accessToken);
        });
       }
      },
      error => {
        console.log('Login fail with error: ' + error);
      }
    );
  }


  // async setupGoogleSignin() {
  //   try {
  //     GoogleSignin.configure({
  //       clientID: '494192112066-0m441va33bf6n4bnl8qaj892ededod9a.apps.googleusercontent.com',
  //       scopes: ['openid', 'email', 'profile'],
  //       shouldFetchBasicProfile: true,
  //     });
  //   }
  //   catch (err) {
  //     console.log("Google signin error", err.code, err.message);
  //   }
  // }
  
  
    // signIn = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //   service.saveUserData('user', userInfo.user);
    //     this.props.navigation.navigate('Home');
    //   } catch (error) {
    //   }
    // };
  


  getUserProfile = (token) =>{ 
      fetch('https://graph.facebook.com/v2.9/me?fields=picture.width(720).height(720).as(picture_large),name,email,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        service.saveUserData('user', json);
        this.props.navigation.navigate('Home')
      })
      .catch((err) => {
      //  alert(JSON.stringify(err))
      })
     
  }

  
      goToSignUp = () =>{
       this.props.navigation.navigate('SignUp')
      }

      goToHome = () =>{
        service.saveUserData('user', "");
        this.props.navigation.navigate('Home')
      }
      login = () =>{
                this.props.navigation.navigate('Pay')
      //   RNPaypal.paymentRequest({
      //     clientId: 'AfKX2nUfxsgqrnvw3WtvybQDQ1wTk-N9KE7WB5ow58a-h-Uo7rWLYkP_CDu_V0uV4bbkoB5DRiFux84F',
      //     environment: RNPaypal.ENVIRONMENT.SANDBOX,
      //     intent: RNPaypal.INTENT.SALE,
      //     price: 60,
      //     currency: 'USD',
      //     description: `Android testing`,
      //     acceptCreditCards: true
      // }).then(response => {
      //     console.log(response)
      // }).catch(err => {
      //     console.log(err.message)
      // })
        // if (service.validateEmail(this.state.email))
        // {
        //   //alert("email correct")
        //   this.setState ({ emailFormatError: ''});
        // }
        // else{
        //   this.setState ({ emailFormatError: "Incorrect Email"});
        // }
             
        // if (this.state.email.trim() === "") {
        //   this.setState(() => ({ emailError: " Email is required."}));
        //   this.setState(() => ({ emailFormatError: null}));
        // } else {
        //   this.setState(() => ({ emailError: null})); 
        // }
        // if (this.state.password.trim() === "") {
        //   this.setState(() => ({ passwordError: " Password is required."}));
        // } else {
        //   this.setState(() => ({ passwordError: null}));
        // }
        
        // if(this.state.email && this.state.password && service.validateEmail(this.state.email))
        // {
        //  this.setState ({ loading: true});
        //   setTimeout(() => 
        //   {this.setState({loading: false})
        //   service.saveUserData('user', "");
        //  this.props.navigation.navigate('Home')
        //    }, 3000)
        //   }
       
      //  this.refs.defaultToastBottom.ShowToastFunction('Login SuccessFull');
      
      
       }
       goToForgot = () =>{
        this.props.navigation.navigate('ForgotPassword')
       }
      
      state = {
      value: '',
   };

  handleTextChange = (newText) => this.setState({ value: newText });


  render() {
    return (
      
      <ImageBackground
        source={constants.background}
        style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.topText} onPress={() => this.goToHome()}>Skip</Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
              source={constants.logo}
              style={styles.imageWidth}/>
          </View> 
          <View style={styles.centerAlign}>
          <View style={styles.cardContainer}>
                    <Text style={styles.loginText}>LOGIN</Text>
                    <View style={styles.borderWidth}>
                    <View
                style={styles.textBorder}
              />
                </View>
                <View style={{flex:1}}>
             <View style={styles.rowAlign}>
             <Image source={constants.emailicon} style={styles.icon}/>
             <TextInput placeholder="Email Id" value={this.state.email} onChangeText={(text)=>this.setState({ email:text})}></TextInput>
            
             </View>
             {!!this.state.emailError && (
            <Text style={styles.error}>{this.state.emailError}</Text>
            )}
           
          
            <Text style={styles.error}>{this.state.emailFormatError}</Text>
             <View style={styles.rowAlign}>
             <Image source={constants.passwordicon} style={styles.icon}/>
             <TextInput placeholder="Password" value={this.state.password}  secureTextEntry={true} onChangeText={(text)=> this.setState({ password:text})}></TextInput>
             </View>
             {!!this.state.passwordError && (
            <Text style={styles.error}>{this.state.passwordError}</Text>
             )}
           
             
             </View>
            
      </View>
      </View>
           <View style={styles.loginContainer} >
            <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.login()}>
              <Text style={styles.loginbutton} >Login</Text>
            </TouchableNativeFeedback>
             </View>
      <View style={styles.center}>
      <Text styles={styles.forgotText} onPress={() => this.goToForgot()}>FORGOT PASSWORD ?</Text>
      <View style={styles.borderWidth2}>
      <View
        style={styles.textBorder2}
              >
      </View>
      </View>
      <View style={styles.rowAlign2}>
      <View style={styles.borderWidth3}>
      <View
        style={styles.textBorder2}
              >
      </View>
      </View>
      <View style={styles.connect}>
      <Text styles={styles.textCenter} >OR CONNECT WITH</Text>
      </View>
      <View style={styles.borderWidth3}>
      <View
        style={styles.textBorder2}
              >
                </View>
      </View>
      </View>
      <View style={styles.rowAlign3}>
      <TouchableNativeFeedback onPress={() => this.fbSignIn()}>
      <Image source={constants.fbicon} style={styles.socialIcon}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => this.signIn()}>
      <Image source={constants.googleicon} style={styles.socialIcon} />
      </TouchableNativeFeedback>
      </View>
      <View style={styles.bottomText}>
        <Text>You Dont Have An Account? <Text style={styles.signUpFont} onPress={() => this.goToSignUp()}>SIGN UP</Text></Text>
      </View>
    
      </View>
      <View style={styles.toast}>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
          loading={this.state.loading} />
      </View>
      </ImageBackground>
    
     
    );
  }
}

