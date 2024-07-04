import React from 'react'
import Header from './components/Header/Header'
import PostlestSearch from './components/Main/PostlestSearch'
import Postlist from './components/Main/postlist/Postlist'

const App = () => {
  return (
    <div>
      <Header/>
      <PostlestSearch/>
      <Postlist/>
    </div>
  )
}

export default App