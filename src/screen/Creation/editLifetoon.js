import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container, Fab, Content, Right } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const data = [
    {id : 0,date :  "1 Desember 2018", title : 'Episode 1', url : 'https://i0.wp.com/lh3.googleusercontent.com/-5sBG5jO5Vi8/WdFYYIid73I/AAAAAAAA-uQ/o816LKHgy4cS5w3BijJdeiSvt3P2qo6fgCLcBGAs/s1600/003.jpg'},
    // {id : 1,date :  "7 Desember 2018", title : 'Introduction', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    // {id : 2,date :  "14 Desember 2018", title : 'Episode 1', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    // {id : 3,date :  "21 Desember 2018", title : 'Episode 2', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
  ]

export default class Editwebtoon extends Component  {


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
    <View style={{flex:1}}>
        <Header style={{backgroundColor:'#900C3F'}} androidStatusBarColor='#C70039'>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
                </Button>
            </Left>      
            <Body>
                <Title><Text>Edit Lifetoon</Text></Title>
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

        <View style={{flex:1}}>
            <ScrollView style={{height:"35%"}}>
                <FlatList         
                    scrollEnabled={true}                 
                    data={data}
                    renderItem={({item,index})=>(
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('editEpisode')}>
                        <View style={{flexDirection:"row"}}>     
                            <View key={index} style={styles.viewImageList}>
                                <Image style={styles.imageScroll} source={{uri: item.url}}  />
                            </View>
                            <View>
                                <Text style={styles.textImageList}>{item.title}</Text>
                                <Text style={styles.dateImageList}>{item.date}</Text>
                            </View> 
                        </View>
                    </TouchableOpacity>
                )}
                />
            </ScrollView>  
            <View style={{flexDirection:"row", marginTop:"5%", alignSelf: "center", flex:1}}>
                <Button block info style={styles.buttonAdd}><Text style={styles.textButtonAdd}>+ Add Episode</Text></Button>
                <Button block info style={styles.buttonDeleteWebtoon}><Text style={styles.textButtonAdd}>Delete Webtoon</Text></Button>
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
       marginTop : 15,
       marginBottom : 20,
      },
      textTitle : {
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 15,
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
    width : "40%",
    marginRight: "5%",
    backgroundColor: "#900C3F"
    
},
textButtonAdd: {
    fontWeight: "bold",
    fontSize : 15,
    width : "80%",
    textAlign : "center",
    color: "white"
    
},
buttonDeleteWebtoon: {
    width : "40%",
    backgroundColor : "#C70039",
    borderColor : "black"
    
},
buttonDelete: {
    width : 80,
    marginLeft : 20,
    height : 40,
    backgroundColor : "tomato",
    borderColor : "black"
    
},
textButtonDelete: {
    backgroundColor : "tomato",
    fontWeight : "bold",
    
},
dateImageList : {
    fontWeight : "bold",
    fontSize : 12,
    marginLeft : 20
  },
  });