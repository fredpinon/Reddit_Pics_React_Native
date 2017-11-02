import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  WebView } from 'react-native';

class Web extends Component {

  goBack = () => this.props.history.goBack();

  render () {
    const { id, title } = this.props.match.params;
    const link = `https://www.reddit.com/r/pics/comments/${id}/${title}/`;
    return (
      <View style={{flex:1, marginTop: 20}}>
        <Button
          title='Go Back'
          color='#841584'
          onPress={this.goBack}
        />
        <WebView source={{uri: link}}/>
      </View>
    );
  }
}

export default Web;
