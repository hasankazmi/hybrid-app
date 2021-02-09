import React from 'react';
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

import Feather from 'react-native-vector-icons/Feather';
import {createStackNavigator} from 'react-navigation-stack';

  class UserDashboard extends React.Component{
      
    render(){

        return(
            <SafeAreaView style={{flex: 1}}>
              <View style={styles.headContainer}>
              <View style={styles.contentText}>
                  <TouchableOpacity>
                    <Feather name="align-justify" style={styles.iconBar} />
                  </TouchableOpacity>
                    <Text style={styles.headText}>Dashboard</Text>
                  <TouchableOpacity>
                    <Feather name="bell" style={styles.iconBell} />
                  </TouchableOpacity>
                    
                </View>
              </View>  
                <View style= {styles.container}>
                  <View style={styles.walletBal}>
                    <Text style={styles.walletText}>Wallet =</Text>
                    <Text style={styles.walletPay}>0 PKR</Text>
                  </View>
                  <View style={styles.containerCards}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Plumber")}
                      style={styles.boxCard} 
                    >
                    <View style={styles.item}>
                          <Image
                              style={styles.imageIcon}
                              source= {require("../assets/plumbing.png")} 
                            />
                          <Text style={styles.itemText}>Plumber</Text>

                      </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.boxCard} 
                      onPress = {() => this.props.navigation.navigate("Electrician")}
                    >
                    
                        <View style={styles.item}>
                        <Image
                            style={styles.imageIcon}
                            source= {require("../assets/electrician.png")} 
                          />
                          <Text style={styles.itemText}>Electrician</Text>
                        </View>

                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.boxCard}
                      onPress = {() => this.props.navigation.navigate("Carpenter")}
                    >

                        <View style={styles.item}>
                        <Image
                            style={styles.imageIcon}
                            source= {require("../assets/carpenter.png")} 
                          />
                          <Text style={styles.itemText}>Carpenter</Text>

                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.boxCard}
                      onPress = {() => this.props.navigation.navigate("Actechnician")}
                    >
                    
                        <View style={styles.item}>
                          <Image
                            style={styles.imageIcon}
                            source= {require("../assets/actechnician.png")} 
                          />
                          <Text style={styles.itemText}>AC Technician</Text>
                        </View>
                    </TouchableOpacity>
                      
                  </View>
                </View>
            </SafeAreaView>
        );
    }

  }

export class SideMenu extends React.Component{
  
}



  const styles = StyleSheet.create({

    container: { 
      flex: 1
    },
    headContainer: {
      backgroundColor: '#D5D8DC',
      height: 80,
    },
    contentText: {
        flexDirection: 'row',
        marginTop: 30
    },
    iconBar: {
        paddingHorizontal: 20,
        fontSize: 30,
        color: 'gray'
    },
    iconBell: {
        color: 'gray',
        fontSize: 30,
        paddingHorizontal: 160
    },
    headText: {
        color: '#3465d9',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    walletBal:{
      flexDirection: 'row',
    },
    walletText: {
      color: 'gray',
      marginHorizontal: 20,
      marginVertical: 40,
      fontSize: 28,
      fontWeight: 'bold'
    },
    walletPay: {
      color: 'gray',
      marginHorizontal: 150,
      marginVertical: 40,
      fontSize: 28,
      fontWeight: 'bold'
    },
    containerCards: {
            flex: 1,
            width: '100%',
            height: '85%',
            flexDirection: 'row',
            flexWrap: 'wrap' 
      
          },
          touch:{
            alignItems: 'center',
            justifyContent: 'center',
            flex:1
      
          },
          item:{
            backgroundColor: '#eee',
            borderColor: 'gray',
            borderWidth: 2,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            margin: 5,
            // height: WIDTH / numColumns
          },
          boxCard: {
            width: '50%',
            height: '50%',
            padding: 5
          },
          itemText: {
            color: 'gray',
            fontSize: 20,
            fontWeight: 'bold'
          },
          imageIcon: {
            width: 80,
            height: 80,
          }
        
  });

  export default UserDashboard;