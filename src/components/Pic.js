import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text } from 'react-native';

import { builRouteParams } from '../helpers';

class Pic extends Component {

  renderSinglePic = () => {
    const { data } = this.props.pic;
    let source;
    if (data.thumbnail === 'self' || data.thumbnail === 'default') source = require('../static/nopic.jpg');
    else if (data.thumbnail === 'nsfw') source = require('../static/nsfw.jpg');
    else if (data.thumbnail === 'spoiler') source = require('../static/spoiler.jpg');
    else source = {uri: data.thumbnail};
    const [idParam, titleParam] = builRouteParams(data.permalink);
    return (
      <TouchableOpacity>
        <Link to={`${idParam}/${titleParam}`}>
          <View style={styles.postContainer}>
            <Image source={source} style={styles.image}/>
            <View style={styles.textsContainer}>
              <Text style={styles.date}>{data.created_utc}</Text>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.detailsContainer}>
                <Text><Text style={styles.span}>by:</Text> {data.author}</Text>
                <Text style={styles.score}><Text style={styles.span}>score:</Text> {data.score}</Text>
                <Text><Text style={styles.span}>comments:</Text> {data.num_comments}</Text>
              </View>
            </View>
          </View>
        </Link>
      </TouchableOpacity>
    );
  }

  render () {
    return (
      <View>
        {this.renderSinglePic()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  textsContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  score: {
    paddingHorizontal: 5,
  },
  span: {
    fontWeight: 'bold',
  },
  title: {
    marginVertical: 5,
  },
  date: {
    alignSelf: 'flex-end',
  }
});

export default Pic;
