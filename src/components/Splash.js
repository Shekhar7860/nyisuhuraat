import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, ActivityIndicator} from 'react-native';
import styles from '../styles/styles';
import SplashScreen from 'react-native-splash-screen'
export default class Splash extends Component {
  
  componentDidMount() {
    SplashScreen.hide();
    this.goToLoginScreen()    
  }

  // going to next screen
  goToLoginScreen = () =>{
    setTimeout(() => {this.props.navigation.navigate('Login') }, 3000)
  }
  
  render() {
    return (
       <ImageBackground
        source={require('../images/splash.png')}
        style={styles.container}>
        <ActivityIndicator animating={true} size="large" 
        color="#00ff00" style={styles.splashLoading}/>
        </ImageBackground>
    );
  }
}

