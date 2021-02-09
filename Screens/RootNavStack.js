import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';

import Animate from '../user/Animate';
import UserDashboard, { SideMenu } from '../user/UserDashboard';
import UserLogin from '../user/userLogin';
import UserRegistration from '../user/userRegistration';

import Actechnician from './servicemenComponents/actechnician';
import Carpenter from './servicemenComponents/carpenter';
import Electrician from './servicemenComponents/electrician';
import Plumber from './servicemenComponents/plumber';

import Profile from '../Screens/Profile';
import Facilities from '../Screens/Facilities/Facilities';
import BookingHistory from '../Screens/BookingHistory';




const createstacknavigator = createStackNavigator({

    Animate: {
        screen: Animate,
        navigationOptions: {
            headerShown: false
        }
    },

    UserLogin: {
        screen: UserLogin,
        navigationOptions: {
            headerShown: false
        }
    },

    UserRegistration: {
        screen: UserRegistration,
        navigationOptions: {
            headerShown: false
        }
    },

    UserDashboard: {
        screen: UserDashboard,
        navigationOptions: {
            headerShown: false
        }
    },
    Plumber: {
        screen: Plumber,
        navigationOptions: {
            headerShown: false
        }
    },
    Electrician: {
        screen: Electrician,
        navigationOptions: {
            headerShown: false
        }
    },
    Carpenter: {
        screen: Carpenter,
        navigationOptions: {
            headerShown: false
        }
    },
    Actechnician: {
        screen: Actechnician,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: UserDashboard,
        navigationOptions: {
          headerShown: false
        }
      },
    Profile: {
    screen: Profile,
    navigationOptions: {
        headerShown: false
    }
    },
    Facilities: {
    screen: Facilities,
    navigationOptions: {
        headerShown: false
    }
    },
    BookingHistory: {
    screen: BookingHistory,
    navigationOptions: {
        headerShown: false
    }
    }
}, {initialRouteName: 'Home'});

const appDrawer = createDrawerNavigator(   
    {
      drawer: createstacknavigator,
    },
    {
      contentComponent: SideMenu,
      drawerWidth: Dimensions.get('window').width * 3/4
    }
  );


export default createAppContainer(appDrawer);

