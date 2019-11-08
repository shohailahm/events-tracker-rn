import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList,Dimensions} from 'react-native';
const {width}=Dimensions.get('screen');
export default class List extends Component {
  render() {
    const {onPress, data, title} = this.props;
    return (
      <View style={styles.main}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.ListItem}>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => onPress(item)} >
                <Text>Thumbnail</Text>
                <View style={{width:'40%',marginLeft:'10%'}}>
                  <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
                  <Text style={styles.text} numberOfLines={1}>{item.place}</Text>
                  
                </View>
                <View>
                 <Text style={styles.text}>{item.type}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width
  },
  button: {
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
  ListItem: {
    flex: 1,
    margin: 4,
    padding: 4,
    width: '90%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000',
    minHeight:60
  },
});
