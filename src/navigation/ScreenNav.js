import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Bottom Tab Navigation
import TabNavPage from './TabNav'
import episodePage from '../screen/Lifetoon/episode'
import detailEpisodePage from '../screen/Lifetoon/detailEpisode'
import creationPage from '../screen/Creation/creation'
import createLifetoonPage from '../screen/Creation/createLifetoon'
import addEpisodePage from '../screen/Creation/addEpisode'
import editLifetoonPage from '../screen/Creation/editLifetoon'
import editEpisodePage from '../screen/Creation/editEpisode'


const appNavigator = createStackNavigator({

//Bottom Tab Navigation
    home : {
        screen : TabNavPage,
        navigationOptions:{
            header:null
        }
    },
    episode : {
        screen : episodePage,
        navigationOptions:{
            header:null
        }
    },
    detailEpisode : {
        screen : detailEpisodePage,
        navigationOptions:{
            header:null
        }
    },
    creation : {
        screen : creationPage,
        navigationOptions:{
            header:null
        }
    },
    createLifetoon : {
        screen : createLifetoonPage,
        navigationOptions:{
            header:null
        }
    },
    addEpisode : {
        screen : addEpisodePage,
        navigationOptions:{
            header:null
        }
    },
    editLifetoon : {
        screen : editLifetoonPage,
        navigationOptions:{
            header:null
        }
    },
    editEpisode : {
        screen : editEpisodePage,
        navigationOptions:{
            header:null
        }
    },
},
    {
        initialRouteName : 'home'
    }
)

export default createAppContainer(appNavigator);