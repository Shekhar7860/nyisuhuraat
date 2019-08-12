import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import CustomToast from './CustomToast';
import Loader from './Loader';
export default class SignuUp extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    service = new Service();
    constants = new Constants();
  }

  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
      
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }

  
   // alert(this.state.password)
   }
  goToLogin = () =>{
    this.props.navigation.navigate('Login')
   }
  render() {
    return (
    
      <ImageBackground
        source={constants.background}
        style={styles.container}>
          <View style={styles.imgContainer}>
          <TouchableNativeFeedback onPress={() => this.goToLogin()}>
          <Image source={constants.backicon} style={styles.icon}/>
          </TouchableNativeFeedback>
          </View>
          <View style={styles.imageContainer}>
              <Image
              source={constants.logo}
              style={styles.imageWidth}/>
          </View> 
          <View style={styles.centerAlign}>
          <View style={[styles.cardContainerSignUp, {height:this.state.cardheight}]}>
                    <Text style={styles.loginText}>SIGN UP</Text>
                    <View style={styles.borderWidthSignUp}>
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
            
             <View style={styles.topSpace}>
             <View style={styles.rowAlign}>
             <Image source={constants.phoneicon} style={styles.icon}/>
             <TextInput placeholder="Mobile Number" value={this.state.mobile} onChangeText={(text)=>this.setState({ mobile:text})}></TextInput>
             </View>
             </View>
             {!!this.state.mobileError && (
            <Text style={styles.error}>{this.state.mobileError}</Text>
             )}
             <View style={styles.topSpace}>
             <View style={styles.rowAlign}>
             <Image source={constants.passwordicon} style={styles.icon}/>
             <TextInput placeholder="Password" secureTextEntry={true} value={this.state.password} onChangeText={(text)=>this.setState({ password:text})}></TextInput>
             </View>
             </View>
             {!!this.state.passwordError && (
            <Text style={styles.error}>{this.state.passwordError}</Text>
             )}
             <View style={styles.topSpace}>
             <View style={styles.rowAlign}>
             <Image source={constants.passwordicon} style={styles.icon}/>
             <TextInput placeholder="Confirm Password" secureTextEntry={true}  value={this.state.confirmPassword} onChangeText={(text)=>this.setState({ confirmPassword:text})}></TextInput>
             </View>
             </View>
             {!!this.state.confirmPasswordError && (
            <Text style={styles.error}>{this.state.confirmPasswordError}</Text>
             )}
             </View>
            
      </View>
      </View>
           <View style={styles.loginContainer} >
            <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.signUp()}>
              <Text style={styles.signUpButton} >SIGN UP</Text>
            </TouchableNativeFeedback>
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