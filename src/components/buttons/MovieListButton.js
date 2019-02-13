import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import RatingBadge from './RatingBadge'
import IconCounter from './IconCounter'

export default class MovieListButton extends Component {
  render () {
    const {
      thumbnail,
      ratingValue,
      movieName,
      favCount,
      commentCount,
      openDate,
      isShowPromoIcon
    } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: { thumbnail } }}
          />
        </View>
        <View style={styles.ratingContainer}>
          <RatingBadge
            ratingValue={ratingValue}
          />
        </View>
        <View style={styles.movieContainer}>
          <Text style={styles.movieName}>{movieName}</Text>
          <IconCounter
            icon={'heart-o'}
            count={favCount}
          />
          <IconCounter
            icon={'comment-o'}
            count={commentCount}
          />
          <Text style={styles.openDate}>{openDate}</Text>
        </View>
      </View>
    )
  }
}

MovieListButton.propTypes = {
  thumbnail: PropTypes.string,
  ratingValue: PropTypes.number,
  movieName: PropTypes.string.isRequired,
  favCount: PropTypes.number,
  commentCount: PropTypes.number,
  openDate: PropTypes.string,
  isShowPromoIcon: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.black
  },
  thumbnailContainer: {
    flex: 1
  },
  ratingContainer: {
    flex: 1
  },
  movieContainer: {
    flex: 3
  },
  movieName: {
    color: colors.white
  },
  openDate: {
    color: colors.white
  }
})
