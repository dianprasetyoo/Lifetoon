import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container, Fab, Content, Right } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const data = [
    {id : 0, date :  "12 Desember", title : 'Episode 1', url : 'https://i.pinimg.com/564x/25/7e/41/257e41a2f9e717f04f89ec71f826dfb5.jpg'},
    // {id : 1, date :  "19 Desember", title : 'Episode 2', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    // {id : 2, date :  "26 Desember", title : 'Episode 3', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    // {id : 3, date :  "5 Januari", title : 'Episode 4', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
  ]

export default class Create extends Component  {


  constructor(props)
{
  super(props)
  this.state = {
    searchText: "",
  };
}

search = (searchText) => {
    this.setState({searchText: searchText});
  };


render () {
return(
    <View style={{flex: 1}}>
        <Header style={{backgroundColor:'#900C3F'}} androidStatusBarColor='#C70039'>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
                </Button>
            </Left>      
            <Body>
                <Title><Text>Create Lifetoon</Text></Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='md-checkmark' />
                </Button>
            </Right>    
        </Header>
        <View>
            <Text style={styles.textTitle}>Title</Text>
                <TextInput style={styles.title} onChangeText={this.search} value={this.state.searchText}/>      
            <Text style={styles.textTitle}>Episode</Text>
        </View>          

        <View style={{flex: 1}}>
            <ScrollView style={{height:"65%"}}>
                <FlatList         
                    scrollEnabled={true}                 
                    data={data}
                    renderItem={({item,index})=>(
                    <View style={{flexDirection:"row"}}>
                    <View key={index} style={styles.viewImageList}>
                        <TouchableOpacity >
                            <Image style={styles.imageScroll} source={{uri: item.url}}  />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.textImageList}>{item.title}</Text>
                        <Text style={styles.episodeImageList}>{item.date}</Text>
                    </View>
                </View>
                )}
                />
            </ScrollView>  
            <View style={{flex: 1}}>
                <Button onPress={() => {this.props.navigation.navigate('addEpisode')}} info style={styles.buttonAdd}><Text style={styles.textButtonAdd}>+ Add Episode</Text></Button>
            </View>
        </View>
    </View>
)}
}

const styles = StyleSheet.create({
    title : {
        borderWidth : 1,
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 5,
       marginBottom : 20,
      },
      textTitle : {
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 10,
       fontSize : 15,
       fontWeight : "bold",
      },

    viewImageList : {
     flexDirection : "row",
   },
   imageScroll : {
     marginLeft : 20,
     marginTop : 20,
     width : 80,
     height : 80,
   },
   textImageList : {
     fontWeight : "bold",
     fontSize : 15,
     marginLeft : 20,
     marginTop : 30,
   },
   episodeImageList : {
     fontWeight : "bold",
     fontSize : 12,
     marginLeft : 20
   },
buttonAdd: {
    marginTop : 10,
    width : "60%",
    alignSelf : "center",
    backgroundColor: "#C70039"
    
},
textButtonAdd: {
    fontWeight: "bold",
    fontSize : 15,
    width : "80%",
    textAlign : "center",
    marginLeft : 30,
    color: "white"
    
},
  });