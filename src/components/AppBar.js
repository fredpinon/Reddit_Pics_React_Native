import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text } from 'react-native';

import { capitalize } from '../helpers';

class AppBar extends Component {

  render () {
    const { fetching } = this.props;
    return (
      <View style={styles.appBarContainer}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.props.toggleCategoryPicker}
            title='Select category'
            style={styles.button}
            color='#841584'
          />
        </View>
        <View style={styles.categoryNameContainer}>
          <Text style={styles.categoryName}>
            {fetching ? '' : capitalize(this.props.category)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBarContainer: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  categoryNameContainer: {
    flexBasis:'50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#DDD',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    flexBasis:'50%',
  },
  categoryName: {
    fontSize: 18,
  }
});

export default AppBar;
