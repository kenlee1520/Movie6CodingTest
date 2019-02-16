import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../screens/MainScreen'
import DetailScreen from '../screens/DetailScreen'
import colors from '../styles/colors'

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
    navigationOptions: ({ navigation }) => ({
      title: '電影資訊',
      headerStyle: {
        elevation: 1,
        height: 100,
        backgroundColor: colors.darkGrey
      },
      headerTitleStyle: {
        fontSize: 15,
        color: colors.white,
        textAlign: 'center',
        alignSelf: 'center'
      },
      headerTintColor: colors.white
    })
  }
},
{
  initialRouteName: 'MainScreen'
})

const AppStack = createAppContainer(AppStackNavigator)
export default AppStack
