import React, { Component } from 'react'
import { Navigator } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import reducers from './reducers'
import HomeContainer from './containers/HomeContainer'

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ name: 'react-native-boilerplate', component: HomeContainer }}
          renderScene={(route, navigator) => {
            return <route.component route={route} navigator={navigator} />
          }}
        />
      </Provider>
    )
  }
}

export default App
