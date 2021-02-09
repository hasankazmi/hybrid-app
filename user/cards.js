// import React from 'react';

// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     TextInput,
//     TouchableOpacity,
//     FlatList,
//     Dimensions,
//     Image,
//     Button,
//     AppRegistry
//   } from 'react-native';
//   import { createStackNavigator } from 'react-navigation-stack';
// import Plumber from '../Screens/components/plumber';
// import plumberList from '../Screens/components/plumberList';

//   // const serviceMen = [
//   //     {
//   //       name: "Plumber",
//   //       imageUrl: require("../assets/plumbing.png"),
//   //       link: {
//   //         Plumber: plumber
//   //       }
//   //     },
//   //     {
//   //       name: "Electrician",
//   //       imageUrl: require("../assets/electrician.png"),

//   //     },
//   //     {
//   //       name: "Carpenter",
//   //       imageUrl: require("../assets/carpenter.png"),
//   //     },
//   //     {
//   //       name: "AC Technician",
//   //       imageUrl: require("../assets/actechnician.png")
//   //     }
//   //   ]
  
//   //  const numColumns = 2;
//   //  const WIDTH = Dimensions.get('window').width;

//   // _renderItem = ({item,index}) => {

    


//   //   return(
//   //     <TouchableOpacity style={styles.item} onPress = {() => this.props.navigation.navigate(item.link)}>
//   //       <View>
//   //           <Image
//   //             style={styles.imageIcon}
//   //             source={item.imageUrl}
//   //           />
//   //           <Text style={styles.itemText}>{item.name}</Text>
//   //       </View>
//   //     </TouchableOpacity>

//   //   );
//   // } 

  
// export const Cards = () => {

//   // const { navigate } = this.props.navigation;
//   // console.log(this.props.navigation);

//   return(

//     // <View style={styles.containerCards}>
//     //   <TouchableOpacity
//     //     onPress = {() => }
//     //     style={styles.boxCard} 
//     //   >
//     //   <View style={styles.item}>
//     //         <Image
//     //             style={styles.imageIcon}
//     //             source= {require("../assets/plumbing.png")} 
//     //           />
//     //         <Text style={styles.itemText}>Plumber</Text>

//     //     </View>
//     //   </TouchableOpacity>
      
//     //   <TouchableOpacity 
//     //     style={styles.boxCard} 
//     //     onPress = {() => alert("Electrician")}
//     //   >
      
//     //       <View style={styles.item}>
//     //       <Image
//     //           style={styles.imageIcon}
//     //           source= {require("../assets/electrician.png")} 
//     //         />
//     //         <Text style={styles.itemText}>Electrician</Text>
//     //       </View>

//     //   </TouchableOpacity>
      
//     //   <TouchableOpacity 
//     //     style={styles.boxCard}
//     //     onPress = {() => alert("Carpenter")}
//     //   >

//     //       <View style={styles.item}>
//     //       <Image
//     //           style={styles.imageIcon}
//     //           source= {require("../assets/carpenter.png")} 
//     //         />
//     //         <Text style={styles.itemText}>Carpenter</Text>

//     //       </View>
//     //   </TouchableOpacity>
      
//     //   <TouchableOpacity 
//     //     style={styles.boxCard}
//     //     onPress = {() => alert("AC Technician")}
//     //   >
      
//     //       <View style={styles.item}>
//     //         <Image
//     //           style={styles.imageIcon}
//     //           source= {require("../assets/actechnician.png")} 
//     //         />
//     //         <Text style={styles.itemText}>AC Technician</Text>
//     //       </View>
//     //   </TouchableOpacity>
        
//     // </View>
// // );
// // }

// // const PlumberStack = createStackNavigator({
// //   Plumber: {
// //     screen: Plumber,
// //     navigationOptions: {
// //       header: null
// //     }
// //   }
// // });

// // AppRegistry.registerComponent('Cards', () => PlumberStack);
    



//   styles = StyleSheet.create({
//     containerCards: {
//       flex: 1,
//       width: '100%',
//       height: '85%',
//       flexDirection: 'row',
//       flexWrap: 'wrap' 

//     },
//     touch:{
//       alignItems: 'center',
//       justifyContent: 'center',
//       flex:1

//     },
//     item:{
//       backgroundColor: '#eee',
//       borderColor: 'gray',
//       borderWidth: 2,
//       borderRadius: 10,
//       alignItems: 'center',
//       justifyContent: 'center',
//       flex:1,
//       margin: 5,
//       // height: WIDTH / numColumns
//     },
//     boxCard: {
//       width: '50%',
//       height: '50%',
//       padding: 5
//     },
//     itemText: {
//       color: 'gray',
//       fontSize: 20,
//       fontWeight: 'bold'
//     },
//     imageIcon: {
//       width: 80,
//       height: 80,
//     }
//   });