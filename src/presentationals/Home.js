import React, { Component, PropTypes } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class Home extends Component {
  static propTypes = {
    route: PropTypes.object,
    navigator: PropTypes.object,
  }

  render() {
    const { route, navigator } = this.props

    return (
      <View style={styles.container}>
        <Text>{route.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
  }
})
