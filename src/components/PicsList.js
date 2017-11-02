import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  WebView } from 'react-native';
import Pic from './Pic';
import PicsListHeader from './PicsListHeader';

class PicsList extends React.PureComponent {

  itemSeparator = () => (
    <View
      style={{
        height: 5,
        width: '100%',
        backgroundColor: '#DDD',
      }}
    />
  )

  renderHeader = fetching => {
    if (this.props.renderHeader === true) return null;
    return <PicsListHeader
      fetching={fetching}
      newPosts={this.props.newPosts}
      refresh={this.props.refresh}
    />;
  }

  renderItem = item => <Pic pic={item}/>;

  renderFooter = () => (
    <View style={styles.ActivityIndicatorContainer}>
      <ActivityIndicator animating size='large'/>
    </View>
  )

  render () {
    return (
      <FlatList
        data={this.props.pics}
        style={styles.list}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={item => item.data.id}
        ItemSeparatorComponent={this.itemSeparator}
        ListHeaderComponent={this.props.fetching
          ? this.renderHeader(true)
          : this.renderHeader(false)}
        ListFooterComponent={this.props.fetching
          ? this.renderFooter()
          : null}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 60,
  },
  ActivityIndicatorContainer: {
    paddingVertical: 15,
  }
});

export default PicsList;
