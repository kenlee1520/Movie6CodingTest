import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

export default class PromoIcon extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Image
          source={require('../images/promoicon.jpeg')}
          style={styles.icon}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  icon: {
    height: 55,
    width: 55
  }
})
