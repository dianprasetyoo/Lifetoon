import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container, Fab, Content, Right } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const data = [
    {id : 0, title : 'Episode 1', url : 'https://i.pinimg.com/564x/25/7e/41/257e41a2f9e717f04f89ec71f826dfb5.jpg'},
    // {id : 1, title : 'Introduction', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    // {id : 2, title : 'Episode 1', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    // {id : 3, title : 'Episode 2', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
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
                <Title><Text>Add Episode</Text></Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='md-checkmark' />
                </Button>
            </Right>    
        </Header>
        <View>
            <Text style={styles.textTitle}>Name</Text>
            <TextInput style={styles.title} onChangeText={this.search} value={this.state.searchText}/>      
            <Text style={styles.textTitle}>Add Image</Text>
        </View>          

        <View style={{flex: 1}}>
            <ScrollView style={{height:"50%"}}>
                <FlatList         
                    scrollEnabled={true}                 
                    data={data}
                    renderItem={({item,index})=>(
                    <View style={{flexDirection:"row"}}>
                    <View key={index} style={styles.viewImageList}>
                        <TouchableOpacity>
                            <Image style={styles.imageScroll} source={{uri: item.url}}  />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.textImageList}>{item.title}</Text>
                        <Button block style={styles.buttonDelete}><Text style={styles.textButtonDelete}>Delete</Text></Button>
                    </View>
                </View>
                )}
                />
            </ScrollView>  
            <View style={{flex: 1}}>
                <Button block onPress={() => {alert('add image')}} info style={styles.buttonAdd}><Text style={styles.textButtonAdd}>+ Image</Text></Button>
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
       marginTop : 5,
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
     fontSize : 12,
     marginLeft : 20,
     marginTop : 20,
     marginBottom: 10
   },
   episodeImageList : {
     fontWeight : "bold",
     fontSize : 12,
     marginLeft : 20
   },
buttonAdd: {
    height: 55,
    marginTop : 20,
    width : "60%",
    alignSelf : "center",
    backgroundColor: "#C70039"
    
},
textButtonAdd: {
    fontWeight: "bold",
    fontSize : 15,
    color: "white",
    textAlign : "center",
    
},
buttonDelete: {
    width : 80,
    marginLeft : 20,
    height : 40,
    backgroundColor : "#C70039",
    
},
textButtonDelete: {
    color:"white"
    
    
},
  });