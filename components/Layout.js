import React from 'react'
import Header from './Header'
import Head from 'next/head'

export default function Layout({ title, description, keywords, children }) {
  const getLayout = '';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className='main'>
        {children}
      </div>
    </>
  )
}

Layout.defaultProps = {
  title: "Canberra Caravan Park",
  description: "The best bush experience in Canberra",
  keywords: "caravan park canberra, canberra caravan park, canberra camping"
}