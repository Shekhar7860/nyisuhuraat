
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { BackHandler, Alert} from 'react-native';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Splash from './components/Splash';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SideMenu from './components/SideMenu';
import Paytm from './components/Paytm';
import BusinessPlan from './components/BusinessPlan';
// import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import SplashScreen from 'react-native-splash-screen'

// Sidemenu
export const Menu = DrawerNavigator({
  Home: { screen: Home},
  SignUp: { screen: SignUp},
  
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

// routing 
const AppNavigator = StackNavigator(
  {
    Splash: { screen: Splash},
    Login: { screen: Login},
    Home: { screen: Menu},
    SignUp: { screen: SignUp},
    Pay : { screen: Paytm},
    Plan : { screen: BusinessPlan},
    ForgotPassword:{ screen : ForgotPassword}
  },
  { headerMode: 'none' }
);

export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      navState: ""
    };
  }
 
  
  onNavigationChange = (navState, currentState ,action) => {
    if (navState.hasOwnProperty('index')) {
      this.setState({navState: navState.routes[navState.index]})
  } else {
      this.setState({navState: setCurrentRouteName(navState.routeName)})
  }
  }
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }
  
  
    
   componentWillUnmount = () =>{
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }  
   handleBackButton = () => {
    if(this.state.navState.routeName == "Login")
    {
      BackHandler.exitApp()
      return true;
    }
    else if(this.state.navState.routeName == "Home")
    {
      Alert.alert(
        'Exit App',
        'Do you want to Exit the application?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     )
      return true;
    }
     
   } 

  render() {
    return (
      <AppNavigator
      onNavigationStateChange={this.onNavigationChange}
    />
    );
  }
}


