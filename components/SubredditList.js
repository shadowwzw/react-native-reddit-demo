import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';
import Subreddit from './Subreddit';

export default ({ data, currentTime, loading, actions, after, count, defaultIcon }) => (
  <View style={{ marginTop: 25, marginLeft: 5, marginRight: 5, marginBottom: 5 }}>
    <FlatList
      data={data}
      keyExtractor={( item ) => item.data.name }
      onEndReached={() => { !loading && actions.getSubreddits({ after, count }); }}
      renderItem={({item}) => <Subreddit item={item} currentTime={currentTime} defaultIcon={defaultIcon} />}
    />
    {loading && <ActivityIndicator size="large" style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center' }} />}
  </View>
)
