import React, { Component } from 'react'
import {
// StyleSheet
// Text,
// View
} from 'react-native'
import DetailScreen from './src/screens/DetailScreen'
// import MovieListButton from './src/components/buttons/MovieListButton'
console.disableYellowBox = true
export default class App extends Component {
  render () {
    return (
      <DetailScreen />
    )
  }
}
