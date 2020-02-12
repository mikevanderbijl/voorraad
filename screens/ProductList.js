import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { StyleSheet } from 'react-native';
import {generalStyles, listStyles} from '../src/styles';



export default class ProductListScreen extends Component {
    constructor(props){
      super(props);
      this.renderItem = this.renderItem.bind(this);
      this.state = {
        dataSource: []
      }
    }
    // onPress(productId) {
        // const {navigate} = this.props.navigation;
        // navigate('ProductDetail', {itemId: productId})
    // }
    renderItem = ({item}) => {
      const navigation = this.props.navigation;
      console.log(this.props);
      return(   
        <View>
            <TouchableHighlight onPress = {() => this.props.navigation.navigate('ProductDetail')}>
                <View style={listStyles.TextArea}>
                    <Image 
                        style={listStyles.Image} 
                        source={{ uri: "http://mikevanderbijl.nl/appImage/"+item.photo}}
                    />
                    <Text style={listStyles.MainText}>Naam: {item.name} {"\n"}Omschrijving: {item.discription}</Text>
                </View>
            </TouchableHighlight>
        </View>
      )
    }
    componentDidMount(){
      const url = "http://mikevanderbijl.nl/app2.php"
      fetch(url).then((response) => response.json()).then((responseJson) => {
        this.setState({dataSource: responseJson})  
      }).catch((error) => {
        console.log(error);
      })
    }
    render() { 
    return (
      <View style={generalStyles.container}>
        <View>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View> 
    </View>
    );
  }
}