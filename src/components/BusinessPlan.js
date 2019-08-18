import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert2 = firebase.admob().rewarded('ca-app-pub-9784974231819956/6376217849')
const advert = firebase.admob().interstitial('ca-app-pub-9784974231819956/7713597666')
const request = new AdRequest();
request.addKeyword('foobar');
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
      advert2.loadAd(request.build())

      advert2.on('onAdLoaded', () => {
         console.log('Advert2 ready to show.')
      })
      
      advert2.show()
    alert("searching Page")   
        }
        pay = () =>{
          advert.loadAd(request.build());
  advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
  });
  advert.show();
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
           <Text style={styles.myText}>Start A Business Today</Text>
           <Text style={styles.myText}>Direct Joining - 50rs</Text>
           <Text style={styles.myText}>2nd Level Income - 10rs</Text>
           <Text style={styles.myText}>3rd Level Income - 10rs</Text>
           <Text style={styles.myText}>4th Level Income - 10rs</Text>
           <Text style={styles.myText}>5th Level Income - 10rs</Text>
           </View>
           <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"LARGE_BANNER"}
  unitId={"ca-app-pub-9784974231819956/9775788255"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
           <Text style={{marginLeft:20, color:'white', fontSize : 20, alignSelf:'center'}}>To Start The Business, Pay Fee Account Activation Fee - rs 200</Text>
           <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.pay()}>
              <Text style={styles.paybutton} >Pay Fee</Text>
            </TouchableNativeFeedback>
       </View>
   </View>
      
     
    );
  }
}
