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
import PromoIcon from '../PromoIcon'

export default class MovieListButton extends Component {
  render () {
    const {
      thumbnail,
      ratingValue,
      ratingStar,
      movieName,
      favCount,
      commentCount,
      openDate,
      isShowPromoIcon,
      navigate
    } = this.props
    const promoIconElement =
      <View style={styles.promoIconContainer}>
        <PromoIcon style={styles.promoIcon} />
      </View>
    const emptyPromoIcon =
      <View style={styles.promoIconContainer} />
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
        <View style={{ flex: 1 }} />
        <View style={styles.ratingContainer}>
          <RatingBadge
            ratingValue={ratingValue ? ratingValue : '- -'}
            ratingStar={ratingStar}
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
        {isShowPromoIcon ? promoIconElement : emptyPromoIcon}
      </TouchableOpacity>
    )
  }
}

MovieListButton.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  ratingValue: PropTypes.string,
  ratingStar: PropTypes.number,
  movieName: PropTypes.string.isRequired,
  favCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  openDate: PropTypes.string.isRequired,
  isShowPromoIcon: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    marginBottom: 2
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
    borderBottomColor: colors.lightGrey2,
    borderBottomWidth: 0.2
  },
  counterContainer: {
    width: 160,
    flexDirection: 'row'
  },
  movieContainer: {
    flex: 17,
    justifyContent: 'center',
    borderBottomColor: colors.lightGrey2,
    borderBottomWidth: 0.2
  },
  movieName: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  openDate: {
    color: colors.lightGrey1,
    fontSize: 13
  },
  promoIconContainer: {
    backgroundColor: colors.black,
    position: 'absolute',
    bottom: 1,
    right: 0
  }
})
