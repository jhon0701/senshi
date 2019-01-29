import Home from './src/screens/home.screen';
import Login from './src/screens/login/login';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login},
});
const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;