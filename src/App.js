import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TestPage from './pages/TestPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={TestPage} />
      </Switch>
    </div>
  )
}

export default App;
