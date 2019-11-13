import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator, Text, Image} from 'react-native';

export default class splashScreen extends Component  {

    constructor(props)
  {
    super(props)
    this.state = {
      signInData: '',
    };
  }

    componentDidMount() {
        AsyncStorage.getItem('signInData', (err, res) => {
            if (!err) {
              if (res !== null) {
                this.setState({
                  signInData: JSON.parse(res)
              })
              const token = this.state.signInData.token
              // console.log(token)
              if (token) {
                setTimeout(()=>{
                  this.props.navigation.navigate('ScreenNav')
                }, 10000)               
              } else {
                setTimeout(()=>{
                  console.log('failed : ',this.state.signInData.token)
                  this.props.navigation.navigate('Login')
                }, 1000)                 
              } 
              } else {
                setTimeout(()=>{
                  this.props.navigation.navigate('Login')
                }, 1000)
                
              }   
            } else {
                alert('Cannot Get Token')
            }
        })
    }
  
  render () {
  return(
    <View style={{flex:1, alignSelf:"center", justifyContent: 'center'}}>
        {/* <ActivityIndicator size={100} /> */}
        <Image source={require('../assets/Lifetoon.png')} style={{height:150, width:150}}/>
        {/* <Image source={require('../assets/image/loadings.gif')} style={{height:150, width:150}}/> */}
        
    </View>

  )}
  
  }