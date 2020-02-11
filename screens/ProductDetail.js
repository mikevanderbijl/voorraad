import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { StyleSheet } from 'react-native';
import {generalStyles, listStyles} from '../src/styles';

export default class ProductDetailScreen extends Component {
    constructor(props){
      super(props);
    }
    render() { 
        const tekstId = this.props.navigation.getParam('itemId', 'NO-ID');
        return (
        <View style={generalStyles.container}>
            <View>
                <Text>
                    {tekstId}
                    {/* Hello world product: */}
                    {/* {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))} */}
                </Text>
            </View> 
        </View>
        );
    }
}