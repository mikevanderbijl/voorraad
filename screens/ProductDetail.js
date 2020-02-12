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
        const { navigation } = this.props;
        return (
        <View style={generalStyles.container}>
            <View>
                <Text>Hello world product: 
                    {/* {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))} */}
                </Text>
            </View> 
        </View>
        );
    }
}