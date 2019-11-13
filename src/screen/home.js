import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { Input, Form, Item, Icon, Content, Container,Header, Left, Body, Right, Button,Title} from 'native-base';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux'
import * as actionComics from './../redux/actions/actionComic'
import * as actionFavorites from './../redux/actions/actionFavorite'

class Home extends Component  {

  constructor(props)
{
  super(props)
  this.state = {
    position: 1,
    interval: null,
  };

  AsyncStorage.getItem('signInData', (err, res) => {
    if (!err) {
      this.setState({
        signInData: JSON.parse(res)
      })
      console.log(this.state.signInData)
      this.props.handleGetSlides(this.state.signInData.token)
      this.props.handleGetAllComics(this.state.signInData.id,this.state.signInData.token)
      this.props.handleGetFavorites(this.state.signInData.id,this.state.signInData.token)
      const token = this.state.signInData.token
      // console.log(token)
    } else {
      alert('Cannot Get Token')
    }
  }) 
}

componentWillMount() {
  this.setState({
    interval: setInterval(() => {
      this.setState({
        position: this.state.position === this.props.slidesLocal.slides.length ? 0 : this.state.position + 1
      });
    }, 5000)
  });
}

componentWillUnmount() {
  clearInterval(this.state.interval);
}

async addFavorites(id){
  const token = this.state.signInData.token
  const id_user = this.state.signInData.id
  const id_comic = id
  // alert(id_comic)
    await this.props.handleAddFavorites(id_user, id_comic, token)
    await this.props.handleGetSlides(token)
    this.props.handleGetAllComics(id_user,token)
      this.props.handleGetFavorites(id_user,token)
    alert('success')
}

async deleteFavorites(id){
  const token = this.state.signInData.token
  const id_user = this.state.signInData.id
  const id_favorite = id
  // alert(id)
    await this.props.handleDeleteFavorites(id_favorite, token)
    await this.props.handleGetSlides(token)
    this.props.handleGetAllComics(id_user,token)
      this.props.handleGetFavorites(id_user,token)
    alert('success')
}

render () {
  // console.log('tes:',this.props.allComicsLocal);
  if (this.props.slidesLocal.isLoading==true || this.props.allComicsLocal.isLoading==true || this.props.favoriteLocal.isLoading==true){
    return(
      <View style={{flex:1, alignSelf:"center", justifyContent: 'center'}}>
          <Image source={require('../assets/loading2.gif')} style={{height:80, width:80}}/>
      </View>
    )
  } else {
  return(
  <View style={{flex:1}}>
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
    </View>

  <ScrollView style={{flex:1}}> 

    <View style={styles.slideShow}>
      <Slideshow
        scrollEnabled 
        dataSource={this.props.slidesLocal.slides}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} 
      />
    </View>

    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
    <View>
      <Text style={styles.textFavorite}>Favorite</Text>
    </View>
      <View style={{alignSelf:"flex-end", marginRight: "5%"}}>
        <Button block transparent style={{borderWidth:2, borderRadius:10, width: 50, height: 30, borderColor: "#581845"}}>
          <Text style={{color:"#900c3f"}}>see all</Text>
        </Button>
      </View>
    </View>

    {
      (this.props.favoriteLocal.favorites.length == 0) ?
        <View style={{alignSelf:"center"}}>
          <Image source={require('../assets/LifetoonFavorite.png')} style={{width:100, height:100}}/>
        </View>
      :
        <FlatList         
          scrollEnabled={true}       
          data={this.props.favoriteLocal.favorites}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>(
            <View>
              <View style={styles.viewImageList}>
                <View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('detail')}>
                    <Image name="test" style={styles.imageList} source={{uri: item.comicsID.image}}  />
                  </TouchableOpacity>
                  <Text style={styles.textImageList}>{item.comicsID.title}</Text>
                </View>
              </View>
            </View>    
          )}
        />
    }
  
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <View>
        <Text style={styles.textAll}>All</Text>
      </View>
      <View style={{alignSelf:"flex-end", marginRight: "5%"}}>
        <Button block transparent style={{borderWidth:2, borderRadius:10, width: 50, height: 30, borderColor: "#581845"}}>
          <Text style={{color:"#900c3f"}}>see all</Text>
        </Button>
      </View>
    </View>
    
    <FlatList         
      scrollEnabled={true}       
      data={this.props.allComicsLocal.comics}
      vertical={true}
      renderItem={({item,index})=>(
        <View>
          <View style={styles.viewImageList}>
            <View style={styles.viewImageListVertical}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('episode', {title: item.title, genre: item.genre, image: item.image, comics_id: item.id})}>
                <Image style={styles.imageListVertical} source={{uri: item.image}}  />
              </TouchableOpacity>
              <View>
                <Text style={styles.textImageListVertical}>{item.title}</Text>
                {
                  item.favorite[0]==null ?
                  <Button block style={styles.buttonImageList} onPress={() => this.addFavorites(item.id)}><Text style={styles.textButtonImageList}>+ Favorite</Text></Button>
                  :
                  <Button block danger style={styles.buttonImageListUnfav} onPress={() => this.deleteFavorites(item.favorite[0].id)}><Text style={styles.textButtonImageList}>- Unfavorite</Text></Button>
                }
              </View>
            </View>
          </View>
        </View>    
      )}
    />
  </ScrollView>
</View> 
)}
              }
}

const mapStateToProps = state => {
  return {
    slidesLocal: state.slides,
    allComicsLocal : state.comics,
    favoriteLocal: state.favorites,
  }
}

const mapDispatchToProps = dispatch => {
  return {   
    handleGetSlides: (token) => dispatch(actionComics.handleGetSlides(token)),
    handleGetAllComics: (id_user, token) => dispatch(actionComics.handleGetAllComics(id_user, token)),
    handleGetFavorites: (id, token) => dispatch(actionFavorites.handleGetFavorites(id, token)),
    handleAddFavorites: (id_user, id_comic, token) => dispatch(actionFavorites.handleAddFavorites(id_user, id_comic, token)),
    handleDeleteFavorites: (id_favorite, token) => dispatch(actionFavorites.handleDeleteFavorites(id_favorite, token)),
  }
}

const styles = StyleSheet.create({
  searchBar : {
    borderWidth : 2,
    // alignItems : "center",
      alignContent : "center",
      marginLeft : 20,
      marginRight : 20,
      marginTop : 15,
      marginBottom : 20,
    // marginBottom : 20
  },
  searchIcon : {
      borderWidth : 2,
    // alignItems : "center",
      alignContent : "center",
      marginLeft : 50,
      marginRight : 20,
      marginTop : 15,
    // marginBottom : 20
  },
  slideShow : {
      alignContent : "center",
    // marginBottom : 20
  },
  imageList : {
      width: 100, 
      height: 100,
      marginLeft : 20,
      borderWidth : 2,
      borderColor : "black"

  },
  imageListVertical : {
      width: 100, 
      height: 100,
      marginLeft : 20,
      borderWidth : 2,
      borderColor : "black"

  },
  viewImageList : {
      marginTop : 12,
      marginRight : 20,
    
  },
  viewImageListVertical : {
      flexDirection : "row",
      marginTop : 20,
      marginRight : 20,
    
  },
  textImageList : {
      marginLeft : 20,
      fontWeight : "bold",
      fontSize : 15,

  },
  textImageListVertical : {
      marginLeft : 20,
      marginBottom : 20,
      fontWeight : "bold",
      fontSize : 15,

  },
  textFavorite : {
      marginLeft : 20,
      marginTop : 20,
      fontWeight : "bold",
      fontSize : 20
  },
  textAll : {
      marginLeft : 20,
      marginTop : 20,
      fontWeight : "bold",
      fontSize : 20
  },
  buttonImageList : {
      marginLeft : 20,
      width : 100,
      backgroundColor : "orange",
      height: 40
  },
  buttonImageListUnfav : {
    marginLeft : 20,
    width : 100,
    height: 40
},
  textButtonImageList : {
      fontWeight : "bold",
      fontSize: 10
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);