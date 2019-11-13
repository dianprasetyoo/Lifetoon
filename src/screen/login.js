import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ImageBackground, AsyncStorage} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import axios from 'axios'


export default class Login extends Component  {

  constructor(props)
{
  super(props);
  this.state ={
    inputEmail : '',
    inputPassword : '',
    hideMode : true,
    correctEmail : false,
    isLoading : false,
    signInData: '',

  }
}

onTextEmail (text){
this.setState({inputEmail : text})

}

onTextPassword (textPassword){
  this.setState({inputPassword : textPassword})
}

emailVerification (textEmail){
  if (textEmail == 'email') {
    let correct = this.state.inputEmail.match(/(^[a-zA-Z]+|^[0-9]+|^[a-zA-Z0-9\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)/g)
    if (correct != null) {
        this.state.correctEmail = true
    } else {
        this.state.correctEmail = false
    }
}
}

onClickHide=()=>{
  this.setState({
  hideMode : !this.state.hideMode
  })   
 console.log("Hide is : ", this.state.hideMode);
}

login =()=>{
  const {inputEmail, inputPassword} = this.state
  this.setState({ isLoading: true})
  axios({
      method : 'POST',
      url : 'http://192.168.0.60:5000/api/v3/login',
      data: {
          email : inputEmail, 
          password : inputPassword
      }
  }).then(result => {
      if (result.data.error == true) {
        this.setState({ isLoading: false})
          alert(result.data.message)
      } else {
        this.setState({ isLoading: false})
          // alert('Success')
          // console.log(result.data.id)
          const token = JSON.stringify(result.data)
          AsyncStorage.setItem('signInData', token)
          // AsyncStorage.clear();
          this.props.navigation.navigate('ScreenNav')
      }
  }).catch(err => {
    this.setState({ isLoading: false})
      alert('Gagal Login, Periksa Jaringan')
      // console.log(err)
  })
}

render () {
  if (this.state.isLoading==true){
    return(
      <View style={{flex:1, alignSelf:"center", justifyContent: 'center'}}>
        {/* <Image source={require('../assets/logo/mylogo.png')} style={{height:150, width:150}}/> */}
        <Image source={require('../assets/loading2.gif')} style={{height:150, width:150}}/>
    </View>
    )
  }
return(
  <View style={styles.container}>
    {/* <ImageBackground source={require('../assets/backgrounds.jpg')} style={{justifyContent: 'center', alignSelf: 'stretch',flex: 1,resizeMode: 'cover'}}> */}
    <View>
      <Image source={require('../assets/Lifetoon.png')} style={styles.logoImage}/>
    </View>
    <View>
      <Text style={styles.textLoginSmall}>Login with your account</Text>
    </View>
    <View style={styles.formLogin}>
      <Form style={styles.formLogin}>
        <Item floatingLabel>
          <Label>
            <Text style={styles.textInputLogin}>Email</Text>  
          </Label>
          <Input textContentType={"emailAddress"} value={this.state.inputEmail} onChangeText={(text) => this.onTextEmail(text)} onKeyPress={() => this.emailVerification('email')} style={styles.textInputLogin}></Input>            
        </Item>
        {
          this.state.inputEmail == '' ?
            <View></View>
          :
            this.state.correctEmail == true ?
              <View>
                <Text style={styles.alertEmailSuccess}>correct Email</Text>
              </View>
            :
              <View>
                <Text style={styles.alertEmailDanger}>incorrect Email</Text>
              </View>
        }
        <Item floatingLabel>
          <Label StackedLabel>
            <Text style={styles.textInputLogin}>Password</Text>  
          </Label>
          <Input value={this.state.inputPassword} onChangeText={(text) => this.onTextPassword(text)} secureTextEntry={this.state.hideMode} style={styles.textInputLogin}></Input>
          { 
            this.state.hideMode  ?  
            <Icon name="eye-off" onPress={this.onClickHide}/> 
            : 
            <Icon name="eye" onPress={this.onClickHide}/>
          }          
        </Item>
        {
          this.state.inputPassword == '' ?
        <View></View>
        :
        <View>
          <Text style={styles.alertPasswordSuccess}>Correct Password</Text>
        </View>
        }
      </Form>
    </View>
    <View style={styles.buttonLogin}>
      {
        this.state.inputPassword == '' || this.state.correctEmail == false ?
        <Button disabled onPress={() => this.props.navigation.navigate('ScreenNav')} title="Log IN"><Text style={styles.buttonLoginText}>Log In</Text></Button>
        :
        <Button title="Log IN" onPress = {()=>this.login()}><Text style={styles.buttonLoginText}>Log In</Text></Button>
      }
    </View>

    <View style={styles.signUp}>
      <Text>Dont have an account?</Text>
      <Text style={styles.textSignUp} onPress={() => this.props.navigation.navigate('Register')}> Sign up.</Text>
    </View>
    {/* </ImageBackground>    */}
  </View>
)}

}


const styles = StyleSheet.create({
  container : {
    // backgroundColor : "#4CAF50",
    flex : 1
  },
  textLogin : {
    fontSize : 30,
    textAlign : "center",
    paddingBottom : 10,
  },
  textLoginSmall : {
    fontSize : 15,
    textAlign : "center",
    fontWeight: "bold",
    paddingBottom : 10,
    
  },
  buttonLogin : {
    borderRadius : 50,
    marginLeft : 50,
    marginRight : 50,
    marginTop : 10,
    paddingTop : 20
  },
  buttonLoginText : {
    fontSize : 20,
    color : "white",
    marginLeft : "40%",
  },
  formLogin : {
    marginTop : -10,
    paddingLeft : 10,
    paddingRight : 30,
  },
  alertPasswordDanger : {
    marginTop : 5,
    paddingLeft : 16,
    color : "red",
  },
  alertPasswordSuccess : {
    marginTop : 5,
    paddingLeft : 16,
    color : "green",
  },
  alertEmailDanger : {
    marginTop : 5,
    paddingLeft : 16,
    color : "red",
  },
  alertEmailSuccess : {
    marginTop : 5,
    paddingLeft : 16,
    color : "green",
  },
  logoImage : {
    width : 120,
    height : 120,
    alignSelf: "center",
    marginTop: "10%"
  },
  signUp : {
    flexDirection:"row", 
    alignSelf:"center",
    flex: 1,
    marginTop: "5%" 
  },
  textSignUp : {
    color: "tomato"
  },
});