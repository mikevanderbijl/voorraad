import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  
import { JournalScreen, MeasureScreen, TreatmentScreen, ProfileScreen, ProductDetail } from './screens/LinksScreen';

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: JournalScreen,  
          navigationOptions:{ 
            // tabBarVisible: false,
            tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <MaterialCommunityIcons style={[{color: tintColor}]} size={25} name={'exit-run'}/>  
              </View>), 
          },
        },  
        Dashboard: { screen: MeasureScreen,  
            navigationOptions:{  
                tabBarLabel:'Product scan',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <FontAwesome5 style={[{color: tintColor}]} size={25} name={'fingerprint'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        ProductList: { screen: TreatmentScreen,  
          navigationOptions:{  
              tabBarLabel:'ProductList',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <FontAwesome5 style={[{color: tintColor}]} size={25} name={'archive'}/>  
                  </View>),  
              activeColor: '#615af6',  
              inactiveColor: '#46f6d7',  
              barStyle: { backgroundColor: '#67baf6' },  
          }  
      },        
      ProductDetail: { screen: ProductDetail,  
        navigationOptions:{  
            tabBarLabel:'ProductDetail',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <FontAwesome5 style={[{color: tintColor}]} size={25} name={'archive'}/>  
                </View>),  
            activeColor: '#615af6',  
            inactiveColor: '#46f6d7',  
            barStyle: { backgroundColor: '#67baf6' },  
        }  
    },
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);