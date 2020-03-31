import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from '../screen/Main';
import Login from '../screen/Login';
import Home from '../screen/Home';

const RootStack = createSwitchNavigator(
	{
		Main: {
			screen: Main,
		},
		Login: {
			screen: Login,
		},
		Home: {
			screen: Home,
		},
	},
	{
		headerMode: 'none',
		resetOnBlur: true,
		initialRouteName: 'Main',
		backBehavior: 'none',
		defaultNavigationOptions: {
			gestureEnabled: false,
		},
	},
);

export default createAppContainer(RootStack);
