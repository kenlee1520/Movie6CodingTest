import React, { Component } from 'react'
import {
// StyleSheet
// Text,
// View
} from 'react-native'
import MainScreen from './src/screens/MainScreen'
// import MovieListButton from './src/components/buttons/MovieListButton'
import AppStack from './src/navigators/AppStack'
console.disableYellowBox = true
export default class App extends Component {
  render () {
    return (
      <AppStack />
    )
  }
}
