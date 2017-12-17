import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  connect
} from 'react-redux';

import {
  fetchData
} from '../../redux/actions';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Mapping state to component
const mapStateToProps = (state) => {
  return {
    appData: state.appData
  }
}

// Mapping fetchdata action component
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)