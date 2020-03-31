import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from '../screen/Main';

const RootStack = createSwitchNavigator(
	{
		Main: {
			screen: Main,
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
