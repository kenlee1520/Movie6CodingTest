import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Rating } from 'react-native-ratings'

export default class RatingBadge extends Component {
  render () {
    const {
      ratingValue
    } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.ratingText}>
          <Text>{ratingValue}</Text>
        </View>
        <View style={styles.ratingBar}>
          <Rating
            ratingCount={ratingValue}
            imageSize={60}
            showRating
            onFinishRating={this.ratingCompleted}
          />
        </View>
      </View>
    )
  }
}

RatingBadge.propTypes = {
  ratingValue: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  ratingText: {
    color: colors.yellow
  },
  ratingBar: {
    color: colors.yellow
  }
})
