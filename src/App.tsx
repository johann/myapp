import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import Header from './component/Header'

export default class App extends Component {
  render() {
    const { container, header, content } = styles

    return (
      <View style={container}>
        <View style={header}>
          <Header title='Learn'/>
        </View>
        <View style={content}>
        <Button
          title="LOADING BUTTON"
          loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  header: {
    flex: 1
  },
  content: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
