import React, { Component } from 'react';
import { StyleSheet, Picker } from 'react-native';

class CategoryPicker extends Component {

  render () {
    const { selectedValue } = this.props;
    return !this.props.renderPicker ? null : (
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={this.props.fetchNewCategory}
      >
        <Picker.Item label='New' value='new' color={selectedValue === 'new' ? '#841584' : '#000'}/>
        <Picker.Item label='Hot' value='hot' color={selectedValue === 'hot' ? '#841584' : '#000'}/>
        <Picker.Item label='Top' value='top' color={selectedValue === 'top' ? '#841584' : '#000'}/>
        <Picker.Item label='Controversial' value='controversial' color={selectedValue === 'controversial' ? '#841584' : '#000'}/>
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    marginTop: -40,
    zIndex: -1,
  }
});

export default CategoryPicker;
