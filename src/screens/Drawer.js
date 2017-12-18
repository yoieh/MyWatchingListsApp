import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import {connect} from 'react-redux';

class SideMenu extends Component {

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
      console.log('SideMenu', 'Unhandled event ' + event.id);
  }

  render() {
    return (
      <View style={styles.sideMenu}>
        <Text style={styles.title}>Hello from SideMenu</Text>

        <TouchableOpacity onPress={ this.onPushScreen.bind(this) }>
          <Text style={styles.button}>Push screen</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPushScreen() {
    // this.props.navigator.handleDeepLink({
    //   link: 'tab1/pushScreen/example.PushedScreen'
    // });
  }
}

const styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    width: 250,
    backgroundColor: '#efefef',
    padding: 20
  },
  title: {
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    marginTop:10,
    color: 'black'
  }
});

export default connect()(SideMenu);