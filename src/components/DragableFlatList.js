import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
const {width} = Dimensions.get('screen');

export default class DragableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  remove = item => {};

  render() {
    const {onPress, data, onRemove, changeData} = this.props;
    return (
      <View style={styles.main}>
        <DraggableFlatList
          data={data}
          renderItem={({item, index, move, moveEnd, isActive}) => (
            <View style={styles.ListItem}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => onPress(item)}
                onLongPress={move}
                onPressOut={moveEnd}>
                <Text>Thumbnail</Text>
                <View style={{width: '40%', marginLeft: '10%'}}>
                  <Text style={styles.text} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.text} numberOfLines={1}>
                    {item.place}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text}>{item.type}</Text>
                </View>
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={()=>onRemove(item)}>
                  <View style={{width: '100%', alignItems:'center',borderTopWidth:1,borderColor:'#000'}}>
                    <Text style={styles.text} numberOfLines={1}>
                      Remove
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onMoveEnd={({data}) => changeData(data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width,
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
    minHeight: 60,
  },
});
