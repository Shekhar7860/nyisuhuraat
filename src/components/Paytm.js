import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, ActivityIndicator, WebView} from 'react-native';
import styles from '../styles/styles';
import SplashScreen from 'react-native-splash-screen'
export default class Paytm extends Component {
  
  componentDidMount() {
   //  SplashScreen.hide();
  //  this.goToLoginScreen()    
  }

  // going to next screen
  goToLoginScreen = () =>{
    setTimeout(() => {this.props.navigation.navigate('Login') }, 3000)
  }
  
  render() {
    return (
      <WebView
        source={{uri: 'https://p-y.tm/aku1-KV'}}
        // style={{marginTop: 20}}
      />
    );
  }
}

