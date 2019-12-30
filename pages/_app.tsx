import App from 'next/app'
import React from 'react'
import { Header } from '~/components/Header'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    )
  }
}

export default MyApp
