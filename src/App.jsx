import React from 'react'
import Header from './components/Header/Header'
import PostlestSearch from './components/Main/PostlestSearch'
import Postlist from './components/Main/postlist/Postlist'
import Detilis from './components/Detilisi/Detilis'

const App = () => {
  return (
    <div>
      <Header/>
      <PostlestSearch/>
      <Postlist/>
      <Detilis/>
    </div>
  )
}

export default App