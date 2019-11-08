import React, {Component} from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
export function SwipeHoc(WrappedComponent,props) {
    
  return class extends React.Component {
      constructor(props){

          super(props);
      }

    onSwipeLeft=()=>{
        this.props.navigation.navigate('events');
    }

    
    onSwipeRight=()=>{
        this.props.navigation.navigate('Tracking');
    }
    render() {
      return  (
        <GestureRecognizer
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}>
            <WrappedComponent {...this.props} />
        </GestureRecognizer>
      );
    }
  };
};

