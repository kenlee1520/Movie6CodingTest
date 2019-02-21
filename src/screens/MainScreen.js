import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  ScrollView
} from 'react-native'
import axios from 'axios'
import Header from '../components/Header'
import MovieListButton from '../components/buttons/MovieListButton'

export default class MainScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: ''
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
    axios.get('https://api.hkmovie6.com/hkm/movies?type=showing')
      .then(response => {
        console.log(response.data)
        this.setState({ movieList: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  _getMonth (month) {
    switch (month) {
      case 'Jan':
        var output = '1'
        break
      case 'Feb':
        output = '2'
        break
      case 'Mar':
        output = '3'
        break
      case 'Apr':
        output = '4'
        break
      case 'May':
        output = '5'
        break
      case 'Jun':
        output = '6'
        break
      case 'Jul':
        output = '7'
        break
      case 'Aug':
        output = '8'
        break
      case 'Sep':
        output = '9'
        break
      case 'Oct':
        output = '10'
        break
      case 'Nov':
        output = '11'
        break
      case 'Dec':
        output = '12'
        break
    }
    return output
  }

  _getDay (day) {
    var temp = day.split('')
    if (temp[0] === '0') {
      return temp[1]
    } else {
      return day
    }
  }

  _handleChiDate (inputDate) {
    var date = inputDate.split(' ')
    var chiDate = date[3] + '年'
    chiDate += this._getMonth(date[2])
    chiDate += '月'
    chiDate += this._getDay(date[1])
    chiDate += '日'
    return chiDate
  }

  render () {
    console.log('render')
    var outputList = []
    for (let movie of this.state.movieList) {
      let ratingValue = Math.round((movie.rating / 100) * 10) / 10
      let openDate = this._handleChiDate(movie.openDate)
      outputList.push(
        <MovieListButton
          key={`movie-${movie.id}`}
          thumbnail={movie.thumbnail ? movie.thumbnail : 'https://hkmovie6.com/assets/hkm/images/logos/app-icon-168x168.png'}
          ratingValue={ratingValue}
          ratingStar={ratingValue}
          movieName={movie.chiName}
          favCount={movie.favCount}
          commentCount={movie.commentCount}
          openDate={openDate}
          navigate={() => this.props.navigation.navigate('DetailScreen', {
            movieId: movie.id,
            openDate: openDate,
            chiSynopsis: movie.chiSynopsis,
            multitrailers: movie.multitrailers,
            screenShots: movie.screenShots
          })}
        />
      )
    }
    const onActivityIndicator =
      <View style={{ marginTop: 200 }}>
        <ActivityIndicator size='large' color={colors.yellow} />
      </View>
    const content =
      <ScrollView style={styles.contentContainer}>
        { outputList }
      </ScrollView>
    return (
      <View style={styles.wrapper}>
        <Header headerText={'電影'} />
        {this.state.movieList ? content : onActivityIndicator}
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
  headerText: {
    fontSize: 15,
    color: colors.white
  }
})
