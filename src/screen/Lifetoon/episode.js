import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, FlatList, ScrollView, Share, TouchableOpacity, AsyncStorage} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';
import { connect } from 'react-redux'
import * as actionEpisodes from '../../redux/actions/actionEpisode'

const shareOption = {
  title : "Title",
  message : "message"
}


class Episode extends Component  {

  constructor(props)
{
  super(props)

  AsyncStorage.getItem('signInData', (err, res) => {
    if (!err) {
      this.setState({
        signInData: JSON.parse(res)
      })
      console.log(this.state.signInData)
      this.props.handleGetEpisodes(this.props.navigation.getParam('comics_id'), this.state.signInData.token)
      const token = this.state.signInData.token
      // console.log(token)
    } else {
      alert('Cannot Get Token')
    }
  }) 
}

onSharePress =()=>
Share.share(shareOption);


render () {
    console.log("ini eisode: ", this.props.episodesLocal.episodes);
    
return(
    
    <View style={{flex: 1, backgroundColor:"#f2f4f9"}}>
        <ScrollView style={{height:"50%"}}>
      <View>
      <Header style={{backgroundColor:'#900C3F'}} androidStatusBarColor='#C70039'>
        <Body>
          <View style={{width:200, height:50}}>
            <Image source={require('../../assets/Lifetoon-Left.png')} style={{width:100, height:50}}/>            
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.onSharePress}>
            <Icon name='share' />
          </Button>
        </Right>
      </Header>
    </View>
    <View style={styles.viewImageHeader}>
        <Image style={styles.imageHeader} source={{uri: this.props.navigation.getParam('image')}}  />
    </View>
    <View style={{backgroundColor:"white", marginBottom:"10%"}}>
        <Text style={{fontSize:12, fontWeight:"bold", marginLeft:"5%", marginTop:"5%"}}>{this.props.navigation.getParam('genre')}</Text>
        <Text style={{fontSize:20, fontWeight:"bold", marginLeft:"5%", marginBottom:"5%"}}>{this.props.navigation.getParam('title')} <Icon style={{fontSize:20}} name="information-circle-outline" /></Text>
    </View>
    
        <FlatList         
          scrollEnabled={true}       
          data={this.props.episodesLocal.episodes}
          renderItem={({item,index})=>(
            <View style={{flexDirection:"row", backgroundColor:"white", borderBottomWidth: 2, borderColor:"#f2f4f9"}}>
              <View key={index} style={styles.viewImageList}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailEpisode', {id_episode:item.id, title:item.title})}>
                  <Image style={styles.imageScroll} source={{uri: item.image}}  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.textImageList}>{item.title}</Text>
                <Text style={styles.dateImageList}>{new Date().getDate(item.createdAt)} - {new Date().getMonth(item.createdAt)} - {new Date().getFullYear(item.createdAt)}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>

)}

}

const mapStateToProps = state => {
    return {
      episodesLocal: state.episodes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {   
      handleGetEpisodes: (comics_id, token) => dispatch(actionEpisodes.handleGetEpisodes(comics_id, token))
    }
  }


const styles = StyleSheet.create({
    imageHeader : {
      width : '100%',
      height : 250,
    },
    viewImageHeader : {
        // borderWidth : 2,
      },
      imageScroll : {
        marginLeft : 20,
        width : 80,
        height : 80,
      },
      viewImageList : {
        flexDirection : "row",
      },
      textImageList : {
        fontWeight : "bold",
        fontSize : 15,
        marginLeft : 20,
      },
      dateImageList : {
        fontWeight : "bold",
        fontSize : 10,
        marginLeft : 20
      },
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Episode);