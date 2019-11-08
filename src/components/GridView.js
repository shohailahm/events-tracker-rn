import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

export default class GridView extends Component {
  render() {
    const {onPress, data, title} = this.props;
    return (
      <View style={styles.main}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.gridItem}>
              <TouchableOpacity onPress={() => onPress(item)} >
                <Text>Thumbnail</Text>
                <View>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.place}</Text>
                  <Text style={styles.text}>{item.type}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity />
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
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
  gridItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 2,
    padding: 4,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000',
  },
});
