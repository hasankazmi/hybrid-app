import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Touchable,
  TouchableOpacity
} from 'react-native';

import Icons from "react-native-vector-icons/Feather";

class UserLogin extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      borderColor: null
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.contentTitle}>LOGIN</Text>
        <Text style={styles.contentText}>Login with Email and Password</Text>
        <View style={styles.action}>
          <View style={styles.section}>
            <Icons name="mail" size={20} style={styles.iconL} />
            <TextInput
              placeholder="Email"
              style={styles.TextInput} 
            />
          </View>

          <View style={styles.section}>
            <Icons name="lock" size={20} style={styles.iconL} />
            <TextInput
              placeholder="Password"
              style={styles.TextInput} 
            />
          </View>

          <TouchableOpacity>
            <Text  style={styles.forgot}>Forgot Password ? </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnLogin}
            onPress= {()=> this.props.navigation.navigate("UserDashboard")} 
          >
            <Text  style={styles.textLogin}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signUp}>
            <Text style={styles.justText}>Dont have an account? Click to</Text>

            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate("UserRegistration")}
            >
              <Text style={styles.textsignUp}>Sign Up</Text>
            </TouchableOpacity>
          
          </View>
        </View>
      </View>
    );
  }
}
  

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 100
  },
  
  contentTitle: {
    color: '#3465d9',
    fontSize: 30,
    fontWeight: 'bold'
  },
  contentText: {
    color: 'gray'
  },
  section: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  TextInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  forgot: {
    color: '#3465d9',
    textAlign: 'right',
    marginTop: 10
  },
  textLogin: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnLogin: {
    width: '100%',
    height: 55,
    backgroundColor: '#3465d9',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp:{
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  justText: {
    color: 'gray',
    textAlign: 'center',
    justifyContent: 'center'
  },
  textsignUp: {
    color: '#3465d9',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  iconL: {
    color: 'gray',
    fontWeight: 'bold'
  }

});

export default UserLogin;
