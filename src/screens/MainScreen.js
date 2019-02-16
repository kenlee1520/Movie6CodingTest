import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
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
      movieList: '',
      moviesId: [],
      moviesChiName: [],
      moviesRating: [],
      moviesOpenDate: [],
      moviesFavCount: [],
      moviesCommentCount: [],
      moviesThumbnail: []
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
    axios.get('https://api.hkmovie6.com/hkm/movies?type=showing')
      .then(response => {
        console.log(response.data)
        for (let i in response.data) {
          this.setState({
            moviesId: [...this.state.moviesId, response.data[i].id],
            moviesChiName: [...this.state.moviesChiName, response.data[i].chiName],
            moviesRating: [...this.state.moviesRating, response.data[i].rating],
            moviesOpenDate: [...this.state.moviesOpenDate, response.data[i].openDate],
            moviesFavCount: [...this.state.moviesFavCount, response.data[i].favCount],
            moviesCommentCount: [...this.state.moviesCommentCount, response.data[i].commentCount],
            moviesThumbnail: [...this.state.moviesThumbnail, response.data[i].thumbnail]
          })
        }
        this.setState({ movieList: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // componentWillUpdate (nextProps, nextState) {
  //   console.log('--------- start componentWillUpdate ---------')
  //   console.log('will update')
  //   console.log(nextProps)
  //   console.log(nextState)
  //   console.log('--------- end componentWillUpdate ---------')
  // }
  //
  // componentDidUpdate (prevProps, prevState) {
  //   console.log('----------- start componentDidUpdate ------------')
  //   console.log(prevProps)
  //   console.log(prevState)
  //   console.log('----------- end componentDidUpdate ------------')
  // }

  componentWillReceiveProps (nextProps) {
    //   console.log('----------- start componentDidUpdate ------------')
    //   console.log(prevProps)
    //   console.log(prevState)
    //   console.log('----------- end componentDidUpdate ------------')
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
    for (let i in this.state.movieList) {
      let ratingValue = Math.round((this.state.moviesRating[i] / 100) * 10) / 10
      let openDate = this._handleChiDate(this.state.moviesOpenDate[i])
      outputList.push(
        <MovieListButton
          key={i}
          thumbnail={this.state.moviesThumbnail[i] ? this.state.moviesThumbnail[i] : 'https://hkmovie6.com/assets/hkm/images/logos/app-icon-168x168.png'}
          ratingValue={ratingValue}
          ratingStar={ratingValue}
          movieName={this.state.moviesChiName[i]}
          favCount={this.state.moviesFavCount[i]}
          commentCount={this.state.moviesCommentCount[i]}
          openDate={openDate}
          navigate={() => this.props.navigation.navigate('DetailScreen', {
            movieId: this.state.moviesId[i],
            openDate: openDate
          })}
        />
      )
    }
    return (
      <View style={styles.wrapper}>
        <Header headerText={'電影'} />
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
    height: 100,
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
