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
import InfoDictTable from '../components/InfoDictTable'
import Header from '../components/Header'
import ViewMoreText from 'react-native-view-more-text'
import YouTube from 'react-native-youtube'
import Swiper from 'react-native-swiper'

export default class DetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieDetail: ''
    }
  }

  componentWillMount () {
    axios.get('https://api.hkmovie6.com/hkm/movies/47804')
      .then(response => {
        console.log(response.data)
        this.setState({ movieDetail: response.data })
      })
      .catch(error => {
        console.log(error)
      })
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

  render () {
    var swiperElement = []
    // for (let t of this.state.movieDetail.multitrailers) {
    //   var vId = t.replace('https://www.youtube.com/watch?v=', '')
    //   var trailerElement =
    //     <YouTube
    //       videoId={vId}
    //       onReady={e => this.setState({ isReady: true })}
    //       onChangeState={e => this.setState({ status: e.state })}
    //       onChangeQuality={e => this.setState({ quality: e.quality })}
    //       onError={e => this.setState({ error: e.error })}
    //       style={{ height: 200 }}
    //     />
    //   swiperElement.push(trailerElement)
    // }
    // for (let s of this.state.movieDetail.screenShots) {
    //   var screenshotElement =
    //     <Image
    //       source={{ uri: s }}
    //       style={{ height: 200 }}
    //     />
    //   swiperElement.push(screenshotElement)
    // }
    let ratingValue = Math.round((this.state.movieDetail.rating / 100) * 10) / 10
    const synopsis =
      <Text style={{ color: colors.white }}>
        {this.state.movieDetail.chiSynopsis}
      </Text>
    var chiInfoDict = []
    for (let i in this.state.movieDetail.chiInfoDict) {
      chiInfoDict.push(this.state.movieDetail.chiInfoDict[i])
    }
    var hello = 'hello'
    console.log(hello)
    console.log(chiInfoDict[1])
    return (
      <ScrollView style={styles.wrapper}>
        <Header headerText={'電影資訊'} />
        <View style={styles.slideshowContainer}>
          <Swiper
            style={styles.slideshow}
            showsButtons={false}
            loop={false}
            dotColor={'#262626'}
            activeDotColor={'white'}
          >
            {swiperElement}
          </Swiper>
        </View>
        <View style={styles.movieInfo}>
          <View style={styles.movieBasicInfo}>
            <RatingBadge
              ratingValue={ratingValue}
              ratingStar={ratingValue}
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
                  2019/2/15
                </Text>
                <Text style={{ color: colors.yellow }}>|</Text>
                <Text style={styles.duration}>
                  {chiInfoDict[4] ? chiInfoDict[4] : '- -'} 分鐘
                </Text>
                <Text style={{ color: colors.yellow }}>|</Text>
                <Text style={styles.category}>
                  {chiInfoDict[2] ? chiInfoDict[2] : '- -'} 級
                </Text>
              </View>
            </View>
          </View>
          <ViewMoreText
            numberOfLines={4}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={styles.synopsis}
          >
            {synopsis}
          </ViewMoreText>
          <InfoDictTable
            cast={'劉青雲、張家輝、林嘉欣劉青雲、張家輝、林嘉欣劉青雲、張家輝、林嘉欣劉青雲、張家輝、林嘉欣'}
            language={chiInfoDict[1] ? chiInfoDict[1] : 'nor'}
            director={'麥兆輝'}
            genre={'劇情'}
          />
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
    marginTop: 15
  },
  renderViewText: {
    fontSize: 15,
    color: colors.yellow
  }
})
