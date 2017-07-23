import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';
import Reddit from './Reddit';

export default ({ data, currentTime, loading, actions, after, count, defaultIcon, redditHost, openInWebViewComponent }) => (
  <View style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5, marginBottom: 5 }}>
    <FlatList
      data={data}
      keyExtractor={( item ) => item.data.name }
      onEndReached={() => { !loading && actions.getReddits({ after, count }); }}
      renderItem={({item}) => <Reddit
        item={item}
        currentTime={currentTime}
        defaultIcon={defaultIcon}
        redditHost={redditHost}
        openInWebViewComponent={openInWebViewComponent}
      />}
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
