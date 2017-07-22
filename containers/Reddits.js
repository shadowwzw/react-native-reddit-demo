import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import * as RedditsActionCreators from '../actions/Reddits';

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
    console.log('reddits.data = ', reddits.data);
    return error ? (<View><Text>{error}</Text></View>) : (<View>
        <Text style={{ fontSize: 10}}>Все сообщения</Text>
        <FlatList
          style={{ marginBottom: 100 }}
          data={reddits.data}
          keyExtractor={( item ) => item.data.subreddit_id }
          onEndReached={() => { !loading && actions.getReddits({ after }) }}
          renderItem={({item: { data: { thumbnail, subreddit_id, title } }}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: thumbnail}}
              />
              <View style={{flex: 1, backgroundColor: 'white'}} ><Text>{title || ""}</Text></View>
            </View>
          )}
        />
        <ActivityIndicator />
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