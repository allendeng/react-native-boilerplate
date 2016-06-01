import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const propTypes = {
 route: PropTypes.object,
 navigator: PropTypes.object,
}

const Home = ({ route, navigator }) => (
  <View style={styles.container}>
    <Text>{route.name}</Text>
  </View>
)

Home.propTypes = propTypes
export default Home

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
  }
})
