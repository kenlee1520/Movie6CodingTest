import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import colors from '../../styles/colors'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import RatingBadge from '../RatingBadge'
import IconCounter from '../IconCounter'

export default class MovieListButton extends Component {
  render () {
    const {
      thumbnail,
      ratingValue,
      movieName,
      favCount,
      commentCount,
      openDate,
      // isShowPromoIcon,
      navigate
    } = this.props
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={navigate}
      >
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnail }}
            style={styles.thumbnail}
          />
        </View>
        <View style={styles.ratingContainer}>
          <RatingBadge
            ratingValue={ratingValue}
          />
        </View>
        <View style={styles.movieContainer}>
          <Text style={styles.movieName}>{movieName}</Text>
          <View style={styles.counterContainer}>
            <IconCounter
              icon={'heart-o'}
              count={favCount}
            />
            <IconCounter
              icon={'comment-o'}
              count={commentCount}
            />
          </View>
          <Text style={styles.openDate}>{openDate}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

MovieListButton.propTypes = {
  thumbnail: PropTypes.string,
  ratingValue: PropTypes.number,
  movieName: PropTypes.string,
  favCount: PropTypes.number,
  commentCount: PropTypes.number,
  openDate: PropTypes.string,
  // isShowPromoIcon: PropTypes.bool.isRequired,
  navigate: PropTypes.func
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.black
  },
  thumbnailContainer: {
    flex: 5
  },
  thumbnail: {
    height: 110
  },
  ratingContainer: {
    flex: 6,
    justifyContent: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.2
  },
  counterContainer: {
    width: 160,
    flexDirection: 'row'
  },
  movieContainer: {
    flex: 17,
    justifyContent: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.2
  },
  movieName: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  openDate: {
    color: colors.white
  }
})
