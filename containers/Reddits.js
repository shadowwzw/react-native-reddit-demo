import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import * as RedditsActionCreators from '../actions/Reddits';
import RedditList from '../components/RedditList';

class Reddits extends Component {
  componentDidMount(){
    const { actions } = this.props;
    actions.getReddits();
  }
  render() {
    const { actions, reddits } = this.props;
    const after = reddits.after || null;
    const error = reddits.error || null;
    const loading = reddits.loading || null;
    const count = reddits.count || 0;
    console.log('loading = ', loading);
    console.log('reddits.data = ', reddits.data);
    const currentTime = Date.now() / 1000;
    return (<View style={{ flex: 1 }}>
      {
        error ? (<View ><Text>{error}</Text></View>) :
          <RedditList data={reddits.data} currentTime={currentTime} loading={loading} actions={actions} after={after} count={count} />
      }
    </View>)


  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  layoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

function select(state) {
  return {
    reddits: state.reddits
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(RedditsActionCreators, dispatch) }
}

export default connect(select, mapDispatchToProps)(Reddits);