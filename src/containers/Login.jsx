import React, {Component} from "react";
import {StyleSheet, Text, AppRegistry, Image} from "react-native";

export default class Login extends Component {
  constructor() {}
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Text>
        <Image source={pic} style={styles.container}/>
      </Text>
    )
  }
}

const styles = StyleSheet.create({container: {
    flex: 1,
    width: 100,
    height: 100
}})

AppRegistry.registerComponent('Login', () => Login);
