import React, { Component } from 'react'
import {
// StyleSheet
// Text,
  View
} from 'react-native'
// import MainScreen from './src/screens/MainScreen'
import MovieListButton from './src/components/buttons/MovieListButton'

export default class App extends Component {
  render () {
    return (
      <View>
        <MovieListButton
          thumbnail={'https://storage.hkmovie6.com/prod/movie/movies_47804-2018-12-21-074900862.jpg'}
          ratingValue={3.5}
          movieName={'銃夢：戰鬥天使'}
          favCount={1996}
          commentCount={257}
          openDate={'2019/2/5'}
        />
        <MovieListButton
          thumbnail={'https://storage.hkmovie6.com/prod/movie/movies_47804-2018-12-21-074900862.jpg'}
          ratingValue={3.5}
          movieName={'銃夢：戰鬥天使'}
          favCount={1996}
          commentCount={257}
          openDate={'2019/2/5'}
        />
      </View>
    )
  }
}
