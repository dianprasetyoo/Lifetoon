import React, { Component } from 'react';
import { Icon} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import homeScreen from '../screen/home'
import favoriteScreen from '../screen/favorite'
import profileScreen from '../screen/profile'

  
  const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen : homeScreen,
        navigationOptions : {
            tabBarIcon : ({tintColor}) => (
                <Icon style={{ color: tintColor }} name="home" />
            )
        }
    },
    Favorites: {
        screen : favoriteScreen,
        navigationOptions : {
            tabBarIcon : ({tintColor}) =>
                <Icon style={{ color: tintColor }} name="star"/>
        }
    },
    Profile: {
        screen : profileScreen,
        navigationOptions : {
            tabBarIcon : ({tintColor}) =>
                <Icon style={{ color: tintColor }} name="person"/>
        }
    },
    
},

{    
    initialRouteName: 'Home',
    activeColor: "#900C3F",
    inactiveColor: "grey",
    tabBarOptions:{
        activeTintColor: 'yellow',
        inactiveTintColor: 'grey',
    },
    barStyle:{
        backgroundColor:'white' ,
    } 
}, 

);

export default createAppContainer(TabNavigator);