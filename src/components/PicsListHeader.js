import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'react-native-elements';

class PicsListHeader extends Component {
  
  render () {
    const { newPosts, fetching } = this.props;
    return (
      <View style={styles.buttonContainer}>
        <Button
          disabled={fetching || newPosts === false ? true : false}
          title={fetching
            ? 'Refreshing!'
            : (newPosts ? 'Refresh' : 'Nothing New!')}
          color={fetching || newPosts === false ? '#000' : '#FFF'}
          backgroundColor='#841584'
          fontSize={14}
          borderRadius={5}
          onPress={this.props.refresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    alignSelf: 'center',
    paddingVertical: 7,
  }
});

export default PicsListHeader;
