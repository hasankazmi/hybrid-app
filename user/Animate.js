import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';



class Animate extends React.Component{
 
    constructor(props){
        super(props);

        this.state = {
            animation_signin: null,
            animation_signup: null,
            show: false
        }
    }

    onIndexChanged(index){
        if(index == 1){
            this.setState({
                animation_signin: 'bounceInLeft',
                animation_signup: 'bounceInRight',
                show: true
            });
        }else{
            this.setState({
                animation_signin: null,
                animation_signup: null,
                show: false
            });
        }
    }


    render(){
        return(
                <Swiper
                    loop= {false}
                    onIndexChanged = {(index) => this.onIndexChanged(index)}
                >
                    
                    <View style={styles.slide}>
                      <View style={styles.header}>
                          <Image 
                          source={require('../assets/logo.png')} 
                          style={styles.image}
                          />
                      </View>
      
                      <View style={styles.footer}>
                          <Text style={styles.title}>About Us</Text>
                          <Text style={styles.description}>A Handyman performs a range of maintenance duties for homeowners and businesses, either as a contract worker or member of the maintenance department. Their duties include fixing plumbing systems, providing repair guidance, cleaning and remodeling community spaces, and performing repair assessments.</Text>
                      </View>
                    </View>
      
                    <View style={styles.slide}>
                      <View style={styles.header}>
                          <Image 
                          source={require('../assets/logo.png')} 
                          style={styles.image}
                          />
                      </View>
      
                      <View style={styles.footer}>
                        <Text style={styles.title}>Welcome to FixHome</Text>
                        {this.state.show ?
                          <View style={{flexDirection: 'row'}}>
                              <Animatable.View 
                                animation = {this.state.animation_signin}
                                delay = {0}
                                duration = {1500}
                                useNativeDriver={true}
                              >
                                <TouchableOpacity
                                    onPress = {() => this.props.navigation.navigate("UserLogin")} 
                                    style={[styles.button,
                                    {
                                        borderColor: '#356d93',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        marginTop: 15
                                    }
        
                                    ]}>
                                    <Text style={styles.textBtn1}>Sign In</Text>
        
                                </TouchableOpacity>
                              </Animatable.View>
                              
                              <Animatable.View
                                animation = {this.state.animation_signup}
                                delay = {0}
                                duration = {1500}
                                useNativeDriver={true}
                              >
                                <TouchableOpacity
                                    onPress = {() => this.props.navigation.navigate("UserRegistration")}
                                    style={[styles.button, 
                                    { 
                                        backgroundColor: '#356d93',
                                        borderRadius: 50,
                                        marginTop: 15,
                                        marginLeft: 20 
                                    }
                                    ]}>
        
                                    <Text style={styles.textBtn2}>Sign Up</Text>
        
                                </TouchableOpacity>
                              </Animatable.View>
                              
                          </View>
                          :null}
                        </View>
                    </View>
                </Swiper>
          );
      
      } 
    }



const {width,height} = Dimensions.get("screen");
const height_image = height * 0.5 * 0.7;
const width_image = height_image * 1.1; 
const width_button = width * 0.4;
const styles = StyleSheet.create({

    slide: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    image: {
        height: height_image,
        width: width_image
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#345d62',
        textAlign: 'center',
        marginTop: -30
    },
    description: {
        fontSize: 15,
        textAlign: 'justify',
        color: 'gray',
        marginTop: 10
    },
    button: {
        width: width_button,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn1: {
        color: '#356d93',
        fontWeight: 'bold',
        fontSize: 18
    },
    textBtn2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
  
});

export default Animate;
