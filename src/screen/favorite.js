import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { Input, Form, Item, Icon, Content, Container,Header, Left, Body, Right, Button,Title} from 'native-base';
import { connect } from 'react-redux'
import * as actionFavorites from './../redux/actions/actionFavorite'


class Favorite extends Component  {

  constructor(props)
{
  super(props)
  this.state = {
    searchText: "",
    filteredData: []
  };

  AsyncStorage.getItem('signInData', (err, res) => {
    if (!err) {
      this.setState({
        signInData: JSON.parse(res)
      })
      console.log(this.state.signInData)
      this.props.handleGetFavorites(this.state.signInData.id,this.state.signInData.token)
      const token = this.state.signInData.token
      // console.log(token)
    } else {
      alert('Cannot Get Token')
    }
  }) 

}

searchData (){
  if (this.state.filteredData == ''){
  return this.props.favoriteLocal.favorites
} else {
  return this.state.filteredData
}
}

search = (searchText) => {
  this.setState({searchText: searchText});

  let filteredData = data.filter(function (item) {
    return item.title.includes(searchText);
  });

  this.setState({filteredData: filteredData});
};

async deleteFavorites(id){
  const token = this.state.signInData.token
  const id_user = this.state.signInData.id
  const id_favorite = id
  await this.props.handleDeleteFavorites(id_favorite, token)
  await this.props.handleGetFavorites(id_user,token)
}

render () {
  console.log("favrite woi:", this.props.favoriteLocal.favorites[0].comicsID);
  if (this.props.favoriteLocal.isLoading==true){
    return(
      <View style={{flex:1, alignSelf:"center", justifyContent: 'center'}}>
          <Image source={require('../assets/loading2.gif')} style={{height:80, width:80}}/>
      </View>
    )
  } else {
  return(
  <View>
      <Header style={{backgroundColor:'#900C3F'}} androidStatusBarColor='#C70039'>
        <Body>
          <View style={{width:200, height:50}}>
            <Image source={require('../assets/Lifetoon-Left.png')} style={{width:100, height:50}}/>
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
      {/* <Content>
    <Item regular>
      <Input style={styles.searchBar} onChangeText={this.search} value={this.state.searchText}/><Icon name="search" style={styles.searchIcon}/>      
    </Item>
  </Content> */}
      <View>
        <ScrollView style={{height:"90%", marginTop:"5%"}}>
        <FlatList         
          scrollEnabled={true}                 
          data={this.searchData()}
          numColumns={3}
          renderItem={({item,index})=>(
            <View>
              <View key={index} style={styles.viewImageList}>
                <TouchableOpacity>
                  <Image style={styles.imageScroll} source={{uri: item.comicsID.image}}  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={{width:70, marginLeft:20}}>
                  <Text style={styles.genreImageList}>{item.comicsID.genre}</Text>
                  <Text numberOfLines={1} style={styles.textImageList}>{item.comicsID.title}</Text>
                </View>
                <View>
                  <Icon name="star" style={{color:"gold"}} onPress={() => this.deleteFavorites(item.id)}/>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
  </View>
    </View>
)}
          }

}

const mapStateToProps = state => {
  return {
    favoriteLocal: state.favorites,
  }
}

const mapDispatchToProps = dispatch => {
  return {   
    handleGetFavorites: (id, token) => dispatch(actionFavorites.handleGetFavorites(id, token)),
    handleDeleteFavorites: (id_favorite, token) => dispatch(actionFavorites.handleDeleteFavorites(id_favorite, token)),
  }
}

const styles = StyleSheet.create({
  searchBar : {
    borderWidth : 2,
   alignContent : "center",
   marginLeft : 20,
   marginTop : 15,
   marginBottom : 20,
  },
  imageHeader : {
   width : '100%',
   height : 250,
 },
 viewImageHeader : {
     borderWidth : 2,
     marginBottom : 20
   },
  viewImageList : {
   flexDirection : "row",
 },
 imageScroll : {
   marginLeft : 20,
   marginBottom : "5%",
   width : 93,
   height : 93,
 },
 textImageList : {
   fontWeight : "bold",
   fontSize : 12,
   marginBottom: "10%",
   width:"60%",
 },
 genreImageList : {
   fontWeight : "bold",
   fontSize : 10,
   color: "red"
 },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);