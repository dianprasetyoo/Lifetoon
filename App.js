import React, { Component } from 'react';
import SwitchNavPage from './src/navigation/SwitchNav'
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { store } from './src/redux/store';

export default class App extends Component  {

  constructor(props)
{
  super(props)
  
}


render () {
return(
  <Provider store={store}>
    <SwitchNavPage />
  </Provider>
)}

}

