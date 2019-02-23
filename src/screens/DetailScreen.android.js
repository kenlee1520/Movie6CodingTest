import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import axios from 'axios'
import RatingBadge from '../components/RatingBadge'
import IconCounter from '../components/IconCounter'
import ViewMoreText from 'react-native-view-more-text'
import YouTube from 'react-native-youtube'
import Swiper from 'react-native-swiper'
import {
  Table,
  Row
} from 'react-native-table-component'

export default class DetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieDetail: '',
      chiInfoDict: '',
      swiperElement: ''
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
    axios.get('https://api.hkmovie6.com/hkm/movies/' + this.props.navigation.getParam('movieId'))
      .then(response => {
        console.log(response.data)
        this.setState({
          movieDetail: response.data,
          chiInfoDict: response.data.chiInfoDict
        })
      })
      .catch(error => {
        console.log(error)
      })
    for (let i in this.props.navigation.getParam('multitrailers')) {
      var vId = this.props.navigation.getParam('multitrailers')[i].replace('https://www.youtube.com/watch?v=', '')
      let trailerElement =
        <View>
          <YouTube
            key={`YouTube${i}`}
            apiKey='AIzaSyBgpTNUFAYxhYJa4UKbIuyeAJ1xp1u9Aa8'
            videoId={vId}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ height: 200 }}
          />
        </View>
      this.setState(prevState => ({
        swiperElement: [...prevState.swiperElement, trailerElement]
      }))
    }
    for (let i in this.props.navigation.getParam('screenShots')) {
      let screenshotElement =
        <View>
          <Image
            key={`Screenshots${i}`}
            source={{ uri: this.props.navigation.getParam('screenShots')[i] }}
            style={{ height: 200 }}
          />
        </View>
      this.setState(prevState => ({
        swiperElement: [...prevState.swiperElement, screenshotElement]
      }))
    }
  }

  renderViewMore (onPress) {
    return (
      <Text onPress={onPress} style={styles.renderViewText}>更多</Text>
    )
  }

  renderViewLess (onPress) {
    return (
      <Text onPress={onPress} style={styles.renderViewText}>更少</Text>
    )
  }

  _handleRatingStar (rating) {
    if (typeof rating === 'undefined') {
      return 0
    } else {
      var temp = (parseInt(rating / 10)) / 10
      if (temp % 0.5 === 0) {
        return temp
      } else {
        var trimValue = Math.round((temp % 0.5) * 10) / 10
        if ((temp - trimValue) % 1 === 0.5) {
          return (temp - trimValue)
        } else {
          return (temp - trimValue + 0.5)
        }
      }
    }
  }

  _handleRatingValue (rating) {
    if (typeof rating === 'undefined') {
      return '- -'
    } else {
      var tempRating = parseInt(rating / 10)
      return (tempRating / 10).toFixed(1)
    }
  }

  render () {
    let ratingValue = this._handleRatingValue(this.state.movieDetail.rating)
    let ratingStar = this._handleRatingStar(this.state.movieDetail.rating)
    const swiper =
      <Swiper
        style={styles.slideshow}
        showsButtons={false}
        loop={false}
        dotColor={'#262626'}
        activeDotColor={'white'}
      >
        {this.state.swiperElement}
      </Swiper>
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.slideshowContainer}>
          {this.state.swiperElement ? swiper : null}
        </View>
        <View style={styles.movieInfo}>
          <View style={styles.movieBasicInfo}>
            <RatingBadge
              ratingValue={ratingValue}
              ratingStar={ratingStar}
            />
            <View style={{ flex: 0.5, marginLeft: 10 }}>
              <Text style={styles.movieName}>{this.state.movieDetail.chiName}</Text>
              <View style={{ flexDirection: 'row' }}>
                <IconCounter
                  icon={'heart-o'}
                  count={this.state.movieDetail.favCount ? this.state.movieDetail.favCount : 0}
                />
                <IconCounter
                  icon={'comment-o'}
                  count={this.state.movieDetail.commentCount ? this.state.movieDetail.commentCount : 0}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.openDate}>
                  {this.props.navigation.getParam('openDate')}
                </Text>
                <Text style={{ color: colors.yellow }}>|</Text>
                <Text style={styles.duration}>
                  {this.state.chiInfoDict.片長} 分鐘
                </Text>
                <Text style={{ color: colors.yellow }}>|</Text>
                <Text style={styles.category}>
                  {this.state.chiInfoDict.級別} 級
                </Text>
              </View>
            </View>
          </View>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={styles.synopsis}
          >
            {this.props.navigation.getParam('chiSynopsis')}
          </ViewMoreText>
          <View style={styles.movieInfoDict}>
            <Table borderStyle={{ borderWidth: 1, borderColor: 'transparent' }}>
              <Row data={['導演', this.state.chiInfoDict.導演]} flexArr={[1, 6.5]} textStyle={styles.tableText} />
              <Row data={['演員', this.state.chiInfoDict.演員]} flexArr={[1, 6.5]} textStyle={styles.tableText} />
              <Row data={['類型', this.state.chiInfoDict.類型]} flexArr={[1, 6.5]} textStyle={styles.tableText} />
              <Row data={['語言', this.state.chiInfoDict.語言]} flexArr={[1, 6.5]} textStyle={styles.tableText} />
            </Table>
          </View>
        </View>
      </ScrollView>
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
  slideshowContainer: {
    flex: 1,
    height: 200
  },
  movieInfo: {
    padding: 10
  },
  movieBasicInfo: {
    flex: 1,
    flexDirection: 'row'
  },
  movieName: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  openDate: {
    color: colors.white,
    marginRight: 8
  },
  duration: {
    color: colors.white,
    marginRight: 8,
    marginLeft: 8
  },
  category: {
    color: colors.white,
    marginLeft: 8
  },
  synopsis: {
    marginTop: 15,
    color: colors.white
  },
  renderViewText: {
    fontSize: 15,
    color: colors.yellow
  },
  tableText: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    color: colors.white
  }
})
