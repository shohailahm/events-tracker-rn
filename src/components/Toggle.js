import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from './Button';

export default class Toggle extends Component {
  state = {active: 'list'};

  toggleGrid = () => {
    this.props.setGrid();
    this.setState({active: 'grid'});
  };
  toggleList = () => {
    this.props.setList();
    this.setState({active: 'list'});
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={{alignItems:'flex-end'}}>
            <Button
            title={' List '}
            onPress={this.toggleList}
            active={this.state.active === 'list'}
            />
        </View>
        
        <View style={{alignItems:'flex-end'}}>
        <Button
          title={' Grid '}
          onPress={this.toggleGrid}
          active={this.state.active === 'grid'}
        />
        </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'row',
    width:'100%',
    justifyContent:'flex-end'
  },
  button: {
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
