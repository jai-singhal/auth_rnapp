import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import firebase from "firebase";
import { Header } from "./src/components/common"


class App extends Component {

  componentWillMount(){

    firebase.initializeApp({
        apiKey: "AIzaSyDunFZU5iW2lk6ZB3yBtCKWL72XpTpojU4",
        authDomain: "rn-auth-d21c3.firebaseapp.com",
        databaseURL: "https://rn-auth-d21c3.firebaseio.com",
        projectId: "rn-auth-d21c3",
        storageBucket: "",
        messagingSenderId: "976714307383"
    });
  }

  render(){
    return (
      <View>
        <Header HeaderText = "Authentication" />
      </View>
    )
  }
}

// export default App;

AppRegistry.registerComponent('auth', () => App);
