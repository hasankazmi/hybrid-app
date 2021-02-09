import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable';


export default class Plumber extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         animation_signin: null,
    //         animation_signup: null,
    //         show: false
    //     }
    // }

    // onIndexChanged(index){
    //     if(index == 1){
    //         this.setState({
    //             animation_signin: 'bounceInLeft',
    //             animation_signup: 'bounceInRight',
    //             show: true
    //         });
    //     }else{
    //         this.setState({
    //             animation_signin: null,
    //             animation_signup: null,
    //             show: false
    //         });
    //     }
    // }
    render(){
        return (
            <View style={styles.plumberView}>
                <TextInput placeholder='User Name' style={styles.userName} />
                <TextInput placeholder='Description' style={styles.description} />

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={[styles.button,
                            {
                                borderColor: '#356d93',
                                borderWidth: 2,
                                borderRadius: 50,
                                marginTop: 15
                            }

                            ]}>
                            <Text style={styles.textBtn1}>Submit</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, 
                            { 
                                backgroundColor: '#356d93',
                                borderRadius: 50,
                                marginTop: 15,
                                marginLeft: 20 
                            }
                            ]}>

                            <Text style={styles.textBtn2}>Cancel</Text>

                        </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const {width,height} = Dimensions.get("screen");
const width_button = width * 0.4;

styles = StyleSheet.create({

    plumberView:{
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 15,
        marginTop: 100
    },
    userName: {
        width: '100%',
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        borderColor: 'gray',
        backgroundColor: '#eee'
    },
    description: {
        width: '100%',
        height: '60%',
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        borderColor: 'gray',
        backgroundColor: '#eee',
        marginTop: 20,
        textAlign: 'auto'
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

