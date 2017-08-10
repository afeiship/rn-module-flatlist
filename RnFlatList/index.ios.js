/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  DeviceEventEmitter,
  ScrollView
} from 'react-native';
import LeftFlatList from './components/flat-list';
import linkageData from './components/data.json';


export default class RnFlatList extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
               <LeftFlatList data = {linkageData}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RnFlatList', () => RnFlatList);
