import React, { Component } from 'react'
import {
// StyleSheet
// Text,
// View
} from 'react-native'
import MainScreen from './src/screens/MainScreen'
// import MovieListButton from './src/components/buttons/MovieListButton'
console.disableYellowBox = true
export default class App extends Component {
  render () {
    return (
      <MainScreen />
    )
  }
}
