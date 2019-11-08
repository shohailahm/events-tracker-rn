import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import Button from '../components/Button';
import {storeData, getData} from '../utils';

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[],found:false,id:this.props.navigation.getParam('item').id};
  }

  async componentDidMount() {
    let storedData = await getData(global.name);
  

    if (
      storedData &&
      storedData.length &&
      storedData.find(item => {
        return item.id === this.state.id;
      })
    ) {
      this.setState({found: true});
    }
  }

  add = async () => {
let currentItem = this.props.navigation.getParam('item');
    let trackinginfo = await getData(global.name);
 
    if  (
      Array.isArray(trackinginfo) &&
      trackinginfo.filter(cur => {
        return cur.id === currentItem.id;
      }).length
    ) {
      return;
    }
    trackinginfo = Array.isArray(trackinginfo) ? trackinginfo.concat(currentItem):[currentItem];
   
    await storeData(trackinginfo);
    return this.props.navigation.goBack();
  };

  render() {
    const {name, place, type} = this.props.navigation.getParam('item');
    return (
      <View style={styles.main}>
        <View style={{padding: 16, alignItems: 'center'}}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{place}</Text>
          <Text style={styles.text}>{type}</Text>
        </View>

        <View
          style={{
            padding: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Button
            title={this.state.found ? 'Tracking' : 'Track'}
            onPress={this.add}
          />
          <Button
            title="Close"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    minHeight: '100%',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 16,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
});
