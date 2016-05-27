import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getUserById } from '../actions/getUserByIdActions'
import Home from '../presentationals/Home'

class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    route: PropTypes.object,
    navigator: PropTypes.object,
    getUserByIdState: PropTypes.object,
  }

  componentDidMount() {
    this.props.dispatch(getUserById(0))
  }

  render() {
    const { route, navigator, getUserByIdState } = this.props

    return (
      <Home route={route} navigator={navigator} getUserByIdState={getUserByIdState} />
    )
  }
}

export default connect((state) => ({
  getUserByIdState: state.getUserByIdState,
}))(HomeContainer)
