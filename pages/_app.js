//Style Imports
import '../css/bootstrap.min.css'
import '../css/fontawesome.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../styles/globals.css'

//JS Imports
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import { createContext, useState } from 'react'

export const AppContext = createContext(null);

export default function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <title>Nayya Benefits Concierge</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
    </Head>
    <Header />
    <div className='bg-cyan fixed-footer'>
      <main id="main-content">
        <div className="container">
          <Component {...pageProps}/>
        </div>
      </main>
      <Footer />
    </div>
  </>
}