import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Button from '../components/Button';

const {width} = Dimensions.get('screen');
export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state={text:''}
  }

  Enter = () => {
    if (!this.state.text) {
      return ToastAndroid.show('Please Enter Name !', ToastAndroid.SHORT);
    }
     ToastAndroid.show(`Hi ${this.state.text} !`, ToastAndroid.SHORT);
     global.name=this.state.text;
     return this.props.navigation.navigate('mainApp');
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={{padding: 16, alignItems: 'center'}}>
          <TextInput
            onChangeText={text => {
              this.setState({text});
            }}
            placeholder="Enter Name"
            style={styles.input}
          />
        </View>

        <View style={{padding: 16, alignItems: 'center'}}>
          <Button title="Enter" onPress={this.Enter} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    width,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 16,
  },
});
