import React from 'react';
import {WebView} from 'react-native';

const WebViewComponent =  ({ navigation: { state: { params: {uri} }}}) => {
  return <WebView
  source={{ uri }} style={{marginTop: 20}}
/>;};

WebViewComponent.navigationOptions = ({ navigation: { state: { params: {title} }}}) => ({
  title
});
export default WebViewComponent;