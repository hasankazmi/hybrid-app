import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

class UserRegistration extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      animation_username: null,
      animation_email: null,
      animation_phone: null,
      animation_password: null,
      animation_cpassword: null
    }
  }

  onIndexChanged(index){
    if(index == 1){
      this.setState({
        animation_username: 'bounceInLeft',
        animation_email: 'bounceInLeft',
        animation_phone: 'bounceInLeft',
        animation_password: 'bounceInLeft',
        animation_cpassword: 'bounceInLeft',
      });
    }else{
      this.setState({
        animation_username: null,
        animation_email: null,
        animation_phone: null,
        animation_password: null,
        animation_cpassword: null
      });
    }
  }


render(){
  return(
    <View style={styles.container} onIndexChanged = {(index) => this.onIndexChanged(index)}>
      <Text style={styles.contentText}>Sign Up</Text>
      
        <View style={styles.action}>
          <Animatable.View
                animation = {this.state.animation_username}
                delay={0}
                duration = {1500}
                useNativeDriver = {true}
              >
              <View style={styles.section}>
                <Icon name="person" size={20} style={styles.iconR} />
                <TextInput placeholder='User Name' style={styles.textInput} />
              </View>
            </Animatable.View>
          <Animatable.View
              animation = {this.state.animation_email}
              delay={0}
              duration = {1500}
              useNativeDriver = {true}
            >
              <View style={styles.section}>
                  <Icon name="mail" size={20} style={styles.iconR} />
                  <TextInput placeholder='Email' style={styles.textInput} />
              </View>
            </Animatable.View>
          
          <View style={styles.section}>
            <Icon name="call" size={20} style={styles.iconR} />
            <TextInput placeholder='Phone Number' style={styles.textInput} />
          </View>
          <View style={styles.section}>
            <Icon name="mail" size={20} style={styles.iconR} />
            <TextInput placeholder='Password' style={styles.textInput} />
          </View>
          <View style={styles.section}>
            <Icon name="mail" size={20} style={styles.iconR} />
            <TextInput placeholder='Confirm Password' style={styles.textInput} />
          </View>

          <TouchableOpacity 
            style={styles.btnSignUp}
            onPress={() => this.props.navigation.navigate("UserLogin")}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>

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
  contentText: {
    fontSize: 20,
    color: '#3465d9',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
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
  textInput: {
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  btnSignUp: {
    width: '100%',
    height: 55,
    backgroundColor: '#3465d9',
    marginTop: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconR: {
    color: 'gray'
  }
  
});

export default UserRegistration;
