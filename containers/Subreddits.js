import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import actionCreators from '../actions/index';
import SubredditList from '../components/SubredditList';
import { DEFAULT_ICON } from '../constants/index';

class Subreddits extends Component {
  static navigationOptions = {
    tabBarLabel: 'Категории',
    title: 'Категории',
  };
  componentDidMount(){
    const { actions } = this.props;
    actions.getSubreddits();
  }
  render() {
    const { actions, subreddits } = this.props;
    const after = subreddits.after || null;
    const error = subreddits.error || null;
    const loading = subreddits.loading || null;
    const count = subreddits.count || 0;
    const currentTime = Date.now() / 1000;
    return (<View style={{ flex: 1 }}>
      {
        error ? (<View ><Text>{error}</Text></View>) :
          <SubredditList data={subreddits.data} currentTime={currentTime} loading={loading} actions={actions} after={after} count={count} defaultIcon={DEFAULT_ICON}/>
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
    subreddits: state.subreddits
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(select, mapDispatchToProps)(Subreddits);