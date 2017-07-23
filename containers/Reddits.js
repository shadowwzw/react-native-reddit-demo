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
    const count = reddits.count || 0;
    console.log('loading = ', loading);
    console.log('reddits.data = ', reddits.data);
    return (<View style={{ flex: 1 }}>
      {
        error ? (<View ><Text>{error}</Text></View>) :
          (<View style={{ marginTop: 25, marginLeft: 5, marginRight: 5, marginBottom: 5 }}>
            <FlatList
              data={reddits.data}
              keyExtractor={( item ) => item.data.name }
              onEndReached={() => { !loading && actions.getReddits({ after, count }); }}
              renderItem={({item: { data: { thumbnail, title } }}) => (
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: thumbnail}}
                  />
                  <View style={{flex: 1, backgroundColor: 'white'}} ><Text>{title || ""}</Text></View>
                </View>
              )}
            />
            {loading && <ActivityIndicator size="large" style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center' }} />}
          </View>)
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