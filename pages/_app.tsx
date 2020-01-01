import App from 'next/app'
import React from 'react'
import { CustomBlock } from '~/components/CustomBlock'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <CustomBlock />
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}

export default MyApp
