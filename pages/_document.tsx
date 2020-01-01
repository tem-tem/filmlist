import { ServerStyleSheets } from '@material-ui/styles'
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import flush from 'styled-jsx/server'
import { colors, theme } from '~/theme'

class MyDocument extends Document {
  render() {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
          <style>
            {`
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }
              html {
                margin-left: calc(100vw - 100%);
                scroll-behavior: smooth;
              }
              body {
                padding-right: 0 !important;
                background-color: ${colors.bg}
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    ),
  }
}

export default MyDocument
