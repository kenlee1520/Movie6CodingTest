import React, { Component } from 'react'
import colors from '../styles/colors'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import axios from 'axios'
import RatingBadge from '../components/RatingBadge'
import IconCounter from '../components/IconCounter'
import InfoDictTable from '../components/InfoDictTable'
import Header from '../components/Header'
import ViewMoreText from 'react-native-view-more-text'
import {
  Table,
  Rows
} from 'react-native-table-component'

export default class DetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieDetail: '',
      tableData: [
        ['導演', '2'],
        ['演員', 'b'],
        ['類型', '2'],
        ['語言', 'b']
      ]
    }
  }

  componentDidMount () {
    axios.get('https://api.hkmovie6.com/hkm/movies/48853')
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
    return (
      <ScrollView style={styles.wrapper}>
        <Header headerText={'電影資訊'} />
        <View style={styles.slideshow}>
          <Text style={{ color: colors.white }}>slideshow</Text>
        </View>
        <View style={styles.movieInfo}>
          <View style={styles.movieBasicInfo}>
            <RatingBadge
              ratingValue={3}
              ratingStar={3}
            />
            <View style={{ flex: 0.5, marginLeft: 10 }}>
              <Text style={styles.movieName}>movieBasicInfo</Text>
              <View style={{ flexDirection: 'row' }}>
                <IconCounter
                  icon={'heart-o'}
                  count={1520}
                />
                <IconCounter
                  icon={'comment-o'}
                  count={520}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.openDate}>2019/2/5</Text>
                <Text style={{ color: colors.yellow }}>|</Text>
                <Text style={styles.duration}>114 分鐘</Text>
                <Text style={{ color: colors.yellow }}>|</Text>
                <Text style={styles.category}>IIA 級</Text>
              </View>
            </View>
          </View>
          <ViewMoreText
            numberOfLines={4}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={styles.synopsis}
          >
            <Text style={{ color: colors.white }}>
              香煙貿易集團賄賂海關一案，被告在開庭前突然棄保潛逃，重要証人許植堯〔張家輝 飾〕亦神秘失蹤。廉政公署總調查主任陳敬慈〔劉青雲 飾〕要在七天之內，翻查所有蛛絲馬跡；上級同時派出另一調查主任江雪兒〔林嘉欣 飾〕，趕赴澳洲遊說許植堯回港出庭作證。然而隨著死線日漸迫近，與案件有關的人相繼離奇死亡，線索亦逐一斷開… 原來許植堯的神秘身份才是案情關鍵！要揭開重重煙幕，才能抽出私煙買賣的幕後黑手！
            </Text>
          </ViewMoreText>
          <InfoDictTable
            cast={'劉青雲、張家輝、林嘉欣'}
            language={'粵語'}
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
  slideshow: {
    flex: 1
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
  movieInfoDict: {
    marginTop: 15
  },
  renderViewText: {
    fontSize: 15,
    color: colors.yellow
  },
  text: { margin: 5, color: colors.white }
})
