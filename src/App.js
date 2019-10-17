// @flow

import {UIManager} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  StackViewStyleInterpolator,
} from 'react-navigation-stack';

import Home from './Home';
import ExampleCalculator from './ExampleCalculator';
import ExampleTouch from './ExampleTouch';

/**
 * Enabled Android Layout Animation
 */
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    ExampleCalculator: {
      screen: ExampleCalculator,
    },
    ExampleTouch: {
      screen: ExampleTouch,
    },
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        return StackViewStyleInterpolator.forHorizontal(sceneProps);
      },
    }),
  },
);

export default createAppContainer(RootStack);
