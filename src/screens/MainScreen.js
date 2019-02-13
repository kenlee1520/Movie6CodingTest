import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import axios from 'axios'
// import Icon from 'react-native-vector-icons/FontAwesome'

export default class MainScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  componentDidMount () {
    axios.get('')
      .then(response => {
        console.log(response.data)
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
          <Text>電影</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <TouchableOpacity>
            <Text>click me</Text>
          </TouchableOpacity>
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
    height: 70,
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
