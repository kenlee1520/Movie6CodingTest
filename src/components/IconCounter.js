import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class IconCounter extends Component {
  render () {
    const {
      icon,
      count
    } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <Icon
            name={icon}
            color={colors.white}
          />
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.counterText}>{count}</Text>
        </View>
      </View>
    )
  }
}

IconCounter.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  iconContainer: {
    flex: 1
  },
  countContainer: {
    flex: 2
  },
  counterText: {
    color: colors.yellow
  }
})
