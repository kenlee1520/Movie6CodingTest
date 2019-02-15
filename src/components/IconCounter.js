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
            size={17}
            color={colors.white}
            style={styles.icon}
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
    flexDirection: 'row'
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontWeight: 'bold'
  },
  countContainer: {
    flex: 3,
    justifyContent: 'center'
  },
  counterText: {
    color: colors.yellow,
    fontWeight: 'bold',
    fontSize: 15
  }
})
