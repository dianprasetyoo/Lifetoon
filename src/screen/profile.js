import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container, Content } from 'native-base';

export default class App extends Component  {

  constructor(props)
{
  super(props)

  this.state = {
    signInData: '',
  };
  
  AsyncStorage.getItem('signInData', (err, res) => {
    if (!err) {
      this.setState({
        signInData: JSON.parse(res)
      })

      const token = this.state.signInData.token
      console.log(token)
    } else {
      alert('Cannot Get Token')
    }
  })
  
}


logout=()=>{
  AsyncStorage.clear();
  this.props.navigation.navigate('Login')
  
}

render () {
return(
  <View style={{flex: 1, backgroundColor:"#f2f4f9"}}>
    <Header style={{backgroundColor:'#900C3F'}} androidStatusBarColor='#C70039'>      
      <Body>
        <View style={{width:200, height:50}}>
          <Image source={require('../assets/Lifetoon-Left.png')} style={{width:100, height:50}}/>
        </View>
      </Body>
    </Header>
    <View>
      <Text style={{margin:"2%"}}>MY PROFILE</Text>        
      <TouchableOpacity full onPress={() => alert('My Profile')} transparent style={styles.buttonProfile}>
        <Icon style={{ color:"black", fontSize:21, marginLeft:'2%', marginVertical: 10}} name="person"/>
        <Text style={styles.textButtonProfile}>{this.state.signInData.name}</Text>       
      </TouchableOpacity>  
    </View> 
    <View>
      <Text style={{margin:"2%"}}>MY CREATION</Text>        
      <TouchableOpacity full onPress={() => this.props.navigation.navigate('creation')} transparent style={styles.buttonProfile}>
        <Icon style={{ color:"black", fontSize:21, marginLeft:'2%', marginVertical: 10}} name="book"/>
        <Text style={styles.textButtonProfile}>My Lifetoon Creation</Text>       
      </TouchableOpacity> 
    </View>
    <View>
      <Text style={{margin:"2%"}}>SUPPORT</Text>        
      <TouchableOpacity full onPress={() => alert('Support')} transparent style={styles.buttonProfile}>
        <Icon style={{ color:"black", fontSize:21, marginLeft:'2%', marginVertical: 10}} name="information-circle-outline"/>
        <Text style={styles.textButtonProfile}>About Us</Text>       
      </TouchableOpacity>
      <TouchableOpacity full transparent style={styles.buttonProfile}>
      <Icon style={{ color:"black", fontSize:21, marginLeft:'2%', marginVertical: 10}} name="mail-open"/>
        <Text style={styles.textButtonProfile}>Send Feedback</Text>
      </TouchableOpacity>    
    </View>
    <View>
      <Text style={{margin:"2%"}}>LOGOUT</Text>
      <TouchableOpacity full style={styles.buttonProfile} onPress = {()=>this.logout()}>
      <Icon style={{ color:"black", fontSize:21, marginLeft:'2%', marginVertical: 10}} name="log-out"/>
        <Text style={styles.textButtonProfile}>Log Out</Text>
      </TouchableOpacity>    
    </View>
</View>
)}

}

const styles = StyleSheet.create({
  imageProfile : {
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
  },
  nameText : {
    alignSelf : "center",
    marginTop : 30,
    fontSize : 25,
    fontWeight : "bold",
    marginBottom : 50,
  },
  buttonProfile : {
    borderColor: "grey",
    borderBottomWidth : 2,
    borderColor: "#f2f4f9",
    color: "white",
    backgroundColor: "white",
    flexDirection: "row",
    height: 50,
  },
  textButtonProfile : {
    fontWeight : "bold",
    fontSize : 15,
    marginLeft: '2%',
    marginVertical: 10,
  },
  avatar: {
    borderRadius: 100,
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
}
});