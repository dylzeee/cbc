import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <div>
      <h3>Hello Big World!</h3>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
