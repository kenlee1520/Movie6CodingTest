import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import axios from 'axios'
import MovieListButton from '../components/buttons/MovieListButton'

export default class MainScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: ''
    }
  }

  componentDidMount () {
    axios.get('https://api.hkmovie6.com/hkm/movies?type=showing')
      .then(response => {
        console.log(response.data)
        this.setState({ movieList: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    // const empty = null
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>電影</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
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
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.black
  },
  headerContainer: {
    height: 55,
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: colors.white
  }
})
