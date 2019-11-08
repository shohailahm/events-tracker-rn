import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    const {onPress, disabled, title,active} = this.props;
    return  (
      <View style={styles.main}>
        <TouchableOpacity onPress={onPress} style={active?styles.button:styles.active} elevation={5}>

                   <Text style={active?styles.text:styles.activeText}>
                    {title}
                   </Text>

            </TouchableOpacity>
      </View>
    );

    }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  active:{
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    borderColor:'#000',
    borderWidth:0.5
  },
  activeText:{
    color: '#000',
  },
  text: {
    color: '#fff',
  },
});
