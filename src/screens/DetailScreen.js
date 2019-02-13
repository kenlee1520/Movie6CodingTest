import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  WebView
} from 'react-native'
import axios from 'axios'
import RatingBadge from '../components/RatingBadge'
import IconCounter from '../components/IconCounter'

export default class DetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieDetail: ''
    }
  }

  componentDidMount () {
    axios.get('https://api.hkmovie6.com/hkm/movies/48853')
      .then(response => {
        console.log(response.data)
        this.setState({ movieDetail: response.data })
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
          <Text>電影資訊</Text>
        </View>
        <WebView
          source={{ uri: 'https://www.youtube.com/watch?v=rAE6KFVfoLg' }}
        />
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
    height: 70,
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
