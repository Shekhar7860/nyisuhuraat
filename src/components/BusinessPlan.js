import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';

export default class BusinessPlan extends Component {
 constructor(props){
     super(props);
     service = new Service();
     constants = new Constants();
     this.state = {
        userData: { picture_large:{ data:{}}},
      };
   
 }
 componentDidMount() {}
  

    openDrawer = () =>{
   this.props.navigation.navigate('Login')}

    searchPage = () =>{
    alert("searching Page")   
        }
        pay = () =>{
            this.props.navigation.navigate('Pay')
        }
  render() {
   
    return (
        
        <View
        source={constants.loginbg}
        style={styles.container}>
      
      <View style={styles.toolbar} >
          <TouchableNativeFeedback onPress={() => this.openDrawer()}>
          <Image source={constants.backicon} style={styles.hamburgerIcon} />
          </TouchableNativeFeedback>
           <Text style={styles.toolbarTitle}>Help</Text>
           <TouchableNativeFeedback onPress={() => this.searchPage()}>
          <Image source={constants.searchicon} style={styles.searchIcon} />
          </TouchableNativeFeedback>
       </View>
       <View style={styles.homeContent}>
           <View style={styles.messageBox}>
           <Text>Start A Business Today</Text>
           <Text>Direct Joining - 50rs</Text>
           <Text>2nd Level Income - 5rs</Text>
           <Text>3rd Level Income - 5rs</Text>
           <Text>4th Level Income - 5rs</Text>
           <Text>5th Level Income - 5rs</Text>
           </View>
           <Text>To Start The Business, Pay Fee Account Activation Fee - rs 200</Text>
           <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.pay()}>
              <Text style={styles.loginbutton} >Pay Fee</Text>
            </TouchableNativeFeedback>
       </View>
   </View>
      
     
    );
  }
}
