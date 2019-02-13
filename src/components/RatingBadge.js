import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import StarRating from 'react-native-star-rating'

export default class RatingBadge extends Component {
  render () {
    const {
      ratingValue
    } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{ratingValue}</Text>
        </View>
        <View style={styles.ratingBar}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={3.5}
            emptyStarColor={colors.yellow}
            halfStar={'star-half-full'}
            fullStarColor={colors.yellow}
            starSize={12}
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
    flexDirection: 'column'
  },
  ratingContainer: {
    alignItems: 'center'
  },
  ratingText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.yellow
  },
  ratingBar: {
    color: colors.yellow,
    alignItems: 'center'
  }
})
