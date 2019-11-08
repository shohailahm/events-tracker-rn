import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Details from './containers/details';
import EventsContainer from './containers/eventsContainer';
import EventDetails from './containers/eventDetail';
import Tracking from './containers/tracking';
import { SwipeHoc } from './components/SwipeHoc';

const mainApp = createStackNavigator(
  {
    events:SwipeHoc(EventsContainer),
    EventDetails:SwipeHoc(EventDetails),
    Tracking:SwipeHoc(Tracking),
  },
  {
    defaultNavigationOptions: {
      title: 'Events',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    initialRouteName: 'events',
  },
);

const RootStack = createSwitchNavigator({
  details: Details,
  mainApp: mainApp,
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
