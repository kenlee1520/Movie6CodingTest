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
    var outputList = []
    var key = 1
    for (let movie of this.state.movieList) {
      let ratingValue = Math.round((movie.rating / 100) * 10) / 10
      outputList.push(
        <MovieListButton
          key={key}
          thumbnail={movie.thumbnail}
          ratingValue={ratingValue}
          ratingStar={ratingValue}
          movieName={movie.chiName}
          favCount={movie.favCount}
          commentCount={movie.commentCount}
          openDate={movie.commentDate}
        />
      )
      key++
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>電影</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          { outputList }
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
