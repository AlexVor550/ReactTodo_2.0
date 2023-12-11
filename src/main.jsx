import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './index.css'
import Header from './components/header/header'
import Layout from './components/Layout/Layout'
import Footer from './components/footer/footer'
import Drinks from './components/Drinks'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Layout>
        <Home />
      </Layout>
      <Footer />
    </Provider>
  </React.StrictMode>,
)
