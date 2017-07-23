import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Platform, FlatList, Image } from 'react-native';

export default ({ item : { data: { thumbnail, title } } }) => (
  <View style={{flex: 1, flexDirection: 'row'}}>
    <Image
      style={{width: 100, height: 100}}
      source={{uri: thumbnail}}
    />
    <View style={{flex: 1, backgroundColor: 'white'}} ><Text>{title || ""}</Text></View>
  </View>
);