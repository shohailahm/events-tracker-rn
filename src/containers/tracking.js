import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import Button from '../components/Button';
import List from '../components/List';
import {storeData, getData} from '../utils';
import DragableList from '../components/DragableFlatList';
const {height} = Dimensions.get('screen');

export default class Tracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedData: [],
    };
  }

  componentDidMount() {
   this.getData();
  }

  getData=async()=>{
    let storedData = await getData(global.name);

    if(storedData && storedData.length) {
      this.setState({storedData});
    }
  }

  details = item => {
    this.props.navigation.navigate('EventDetails', {item});
  };

  remove = async item => {
    let data = this.state.storedData.filter((it)=>{
      return it.id !== item.id;
    });
     this.changeData(data);
    //return this.props.navigation.navigate('mainApp');
  };

  changeData =  data => {
    debugger
    storeData(data).then((val)=>{
      this.getData();
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={{padding: 16, fontSize: 20}}>Tracking List</Text>
        <View style={{flex: 1, padding: 16}}>
          <Text>Long Press to drag and change order of events events </Text>
          <DragableList
            data={this.state.storedData}
            onPress={this.details}
            onRemove={this.remove}
            changeData={this.changeData}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    minHeight: height,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 16,
  },
});
