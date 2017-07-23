import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';

export default ({ currentTime, defaultIcon, item : { data: {
  icon_img,
  title,
  subreddit_name_prefixed,
  created_utc,
  num_comments,
  public_description,
  subscribers,
  url,
} } }) => (
  <View style={{flex: 1, flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
    <Image
      style={{width: 100, height: 100}}
      source={{uri: icon_img || defaultIcon}}
    />
    <View style={{flex: 1, backgroundColor: 'white'}} >
      <Text>{title || ""}</Text>
      <Text>{url || ""}</Text>
      <Text>{ public_description }</Text>
      <Text>{subscribers || 0} подписчиков</Text>
    </View>
  </View>
);