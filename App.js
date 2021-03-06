/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';


const listItem = props => {
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
}

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
        <View style={styles.inputContainer}>
            {/* <Text style={styles.welcome}>Welcome to Couch Bums!</Text> */}
            <TextInput 
              style={styles.input}
              placeholder="What are you watching?"
              value={this.state.placeName} 
              onChangeText={this.placeNameChangedHandler} 
            />        
            <Button
              title="POST"
              style={styles.button}
              accessibilityLabel="Learn more about this purple button"
              onPress={this.placeSubmitHandler}
            />
        </View>
        <View style={styles.placeList}>
            {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    marginBottom: 10,
    padding: 10,
    height: 40,
    width: "70%"
  },
  button: {
    width: "30%",
    color: "#4286f4"
  },
  placeList: {
    width: "100%"
  }
});
