/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  };
  
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" ) {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    });
  };
  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.welcome}>Welcome to Couch Bums!</Text>
          {/* <TextInput 
            style={styles.input}
            placeholder="Enter your username"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler} 
          /> */}
          <TextInput 
            style={styles.input}
            placeholder="Enter your username"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler} 
          />        
          <Button
            title="Login"
            style={styles.button}
            accessibilityLabel="Learn more about this purple button"
            onPress={this.placeSubmitHandler}
          />
          <View>
            {placesOutput}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  input: {
    marginBottom: 10,
    padding: 10,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    width: 200,
    color: "#4286f4"
  }
});
