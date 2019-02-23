import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../screens/MainScreen'
import DetailScreen from '../screens/DetailScreen'
import colors from '../styles/colors'

const AppStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: '電影',
      headerBackTitle: null,
      headerStyle: {
        elevation: 0,
        height: 80,
        backgroundColor: colors.darkGrey
      },
      headerTitleStyle: {
        fontSize: 15,
        color: colors.white,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1
      }
    })
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: '電影資訊',
      headerStyle: {
        elevation: 0,
        height: 80,
        backgroundColor: colors.darkGrey
      },
      headerTitleStyle: {
        fontSize: 15,
        color: colors.white
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
