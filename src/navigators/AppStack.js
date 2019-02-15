import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../screens/MainScreen'
import DetailScreen from '../screens/DetailScreen'

const AppStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        elevation: 0,
        height: 0
      }
    })
  },
  DetailScreen: {
    screen: DetailScreen,
    // navigationOptions: ({ navigation }) => ({
    //   headerLeft: null,
    //   headerStyle: {
    //     elevation: 0,
    //     height: 0
    //   }
    // })
  }
})

const AppStack = createAppContainer(AppStackNavigator)
export default AppStack
