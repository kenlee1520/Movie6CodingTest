import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Header extends Component {
  render () {
    const {
      headerText
    } = this.props
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    )
  }
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
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
