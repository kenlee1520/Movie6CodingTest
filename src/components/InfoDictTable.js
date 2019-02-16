import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import {
  StyleSheet,
  View
} from 'react-native'
import {
  Table,
  Row
} from 'react-native-table-component'

export default class InfoDictTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      director: ['導演'],
      cast: ['演員'],
      genre: ['類型'],
      language: ['語言']
    }
  }

  _handleTableData (data) {
    this.setState({
      director: [...this.state.director, data.director],
      cast: [...this.state.cast, data.cast],
      genre: [...this.state.genre, data.genre],
      language: [...this.state.language, data.language]
    })
  }

  componentDidMount () {
    this._handleTableData(this.props)
  }

  render () {
    return (
      <View style={styles.movieInfoDict}>
        <Table borderStyle={{ borderWidth: 0, borderColor: 'transparent' }}>
          <Row data={this.state.cast} flexArr={[1, 6.5]} textStyle={styles.text} />
          <Row data={this.state.language} flexArr={[1, 6.5]} textStyle={styles.text} />
          <Row data={this.state.director} flexArr={[1, 6.5]} textStyle={styles.text} />
          <Row data={this.state.genre} flexArr={[1, 6.5]} textStyle={styles.text} />
        </Table>
      </View>
    )
  }
}

InfoDictTable.propTypes = {
  cast: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  movieInfoDict: {
    marginTop: 15
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    color: colors.white
  }
})
