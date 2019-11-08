import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import Toggle from '../components/Toggle';
import GridView from '../components/GridView';
import {data} from '../data';
import {ScrollView} from 'react-native-gesture-handler';
import List from '../components/List';
const {width} = Dimensions.get('screen');

export default class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: false,
    };
  }

  Enter = () => {
    return this.props.navigation.navigate('root');
  };

  setGrid = () => {
    this.setState({grid: true});
  };

  setList = () => {
    this.setState({grid: false});
  }

  openDetail = item => {
    this.props.navigation.navigate('EventDetails', {item});
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.main}>
        <View style={{flex: 1, padding: 16, alignItems: 'flex-end'}}>
          <Toggle setGrid={this.setGrid} setList={this.setList} />
        </View>
        <Text style={{fontSize:20,padding:16}}>Event's List</Text>
        {this.state.grid?<View style={{flex: 1, padding: 16}}>
          <GridView data={data} onPress={this.openDetail} />
        </View>:
        <View style={{flex: 1, padding: 16,width}}>
          <List data={data} onPress={this.openDetail} />
        </View>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 16,
  },
});
