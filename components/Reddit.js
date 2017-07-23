import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image, TouchableOpacity } from 'react-native';

export default ({ currentTime, defaultIcon, openInWebViewComponent, item : { data: { thumbnail, title, subreddit_name_prefixed, created_utc, num_comments, url } } }) => (
  <View style={{flex: 1, flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
    <Image
      style={{width: 100, height: 100}}
      source={{uri: thumbnail.match(/jpg/) ? thumbnail : defaultIcon }}
    />
    <View style={{flex: 1, backgroundColor: 'white'}} >
      <TouchableOpacity onPress={() => openInWebViewComponent(url, title)}>
        <Text style={{fontWeight: 'bold'}}>{title || ""}</Text>
      </TouchableOpacity>
      <Text style={{color: 'blue'}}>{subreddit_name_prefixed || ""}</Text>
      <Text>{ Math.round(((currentTime - created_utc) / 60)) || ""} минут назад</Text>
      <Text>{num_comments || ""} комментариев</Text>
    </View>
  </View>
);