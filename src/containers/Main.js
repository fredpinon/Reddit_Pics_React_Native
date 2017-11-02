import React, { Component } from 'react';
import { View, StatusBar} from 'react-native';

import { connect } from 'react-redux';
import { getPosts, revertNew } from '../actions';

import CategoryPicker from '../components/CategoryPicker';
import AppBar from '../components/AppBar';
import PicsList from '../components/PicsList';
import FetchingError from '../components/FetchingError';

class Main extends Component {

  state = {
    category: 'new',
    renderPicker: false,
  }

  componentDidMount () {
    this.refreshList();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.newPosts === false) {
      setTimeout(() => {
        this.props.revertNew();
      }, 1000);
    }
  }

  refreshList = () => {
    const { category } = this.state;
    this.props.fetchPosts(category);
  }

  toggleCategoryPicker = () => {
    const { renderPicker } = this.state;
    this.setState({
      renderPicker: !renderPicker,
    });
  }

  fetchNewCategory = (itemValue, itemIndex) => {
    this.setState({
      category: itemValue
    }, () => {
      this.toggleCategoryPicker();
      this.props.fetchPosts(itemValue);
    });
  }

  renderPicsList = () => {
    if (!this.props.pics) return null;
    if (this.props.fetchingError) return <FetchingError/>;
    return <PicsList
      pics={this.props.pics}
      fetching={this.props.isFetching}
      refresh={this.refreshList}
      newPosts={this.props.newPosts}
      renderHeader={this.state.renderPicker}
    />;
  }

  render () {
    return (
      <View>
        <StatusBar
          barStyle='dark-content'
        />
        <AppBar
          toggleCategoryPicker={this.toggleCategoryPicker}
          category={this.state.category}
          fetching={this.props.isFetching}
        />
        <CategoryPicker
          renderPicker={this.state.renderPicker}
          selectedValue={this.state.category}
          fetchNewCategory={this.fetchNewCategory}
        />
        {this.renderPicsList()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  pics: state.posts.pics,
  isFetching: state.posts.isFetching,
  newPosts: state.posts.newPosts,
  fetchingError: state.posts.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: category => dispatch(getPosts(category)),
  revertNew: () => dispatch(revertNew()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
