import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, Share, ScrollView, FlatList, AsyncStorage, Dimensions} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Right, Body, Title } from 'native-base';
import { connect } from 'react-redux'
import * as actionDetailEpisodes from '../../redux/actions/actionDetailEpisode'

const episode = [
    {id : 0, url : 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png'},
    {id : 1, url : 'https://akcdn.detik.net.id/visual/2019/07/16/605f9839-9dcb-450e-8966-54f2c5cf0bb0_169.jpeg?w=767&q=90'},
    {id : 2, url : 'https://i.pinimg.com/736x/89/93/e7/8993e7a1c6f9f69f8a01596b9c5e52e2.jpg'},
    {id : 3, url : 'https://img.youtube.com/vi/Z7zzWLdmzHo/mqdefault.jpg'},
]

const shareOption = {
    title : "Title",
    message : "message"
  }
class DetailEpisode extends Component  {

onSharePress =()=>
Share.share(shareOption);

  constructor(props)
{
  super(props)

  AsyncStorage.getItem('signInData', (err, res) => {
    if (!err) {
      this.setState({
        signInData: JSON.parse(res)
      })
      console.log(this.state.signInData)
      this.props.handleGetDetailEpisodes(this.props.navigation.getParam('id_episode'), this.state.signInData.token)
      const token = this.state.signInData.token
      // console.log(token)
    } else {
      alert('Cannot Get Token')
    }
  }) 
  
}


render () {
    console.log("detail Episode ni :", this.props.detailEpisodesLocal);
    
return(
    <View>
        <View>
            <Header style={{backgroundColor:'#900C3F'}} androidStatusBarColor='#C70039'>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
            </Button>
            </Left>      
            <Body>
            <Title><Text>{this.props.navigation.getParam('title')}</Text></Title>
            </Body>
            <Right>
            <Button transparent onPress={this.onSharePress}>
                <Icon name='share' />
            </Button>
            </Right>
        </Header>
        </View>

        <ScrollView style={{height:"95%"}}>
        <FlatList         
          scrollEnabled={true}       
          data={this.props.detailEpisodesLocal.detail_episodes}
          renderItem={({item,index})=>(

              <View>
                  <Image source={{uri: item.image}} style={styles.imageEpisode}  />
              </View>
          )}
        />
      </ScrollView>
    </View>

)}
}

const mapStateToProps = state => {
    return {
      detailEpisodesLocal: state.detail_episodes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {   
      handleGetDetailEpisodes: (id_episode, token) => dispatch(actionDetailEpisodes.handleGetDetailEpisodes(id_episode, token))
    }
  }

const styles = StyleSheet.create({
    imageEpisode : {
      width : Dimensions.get('window').width,
      height : 500,
    },
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailEpisode);