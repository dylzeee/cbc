import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import About from '../components/About'
import Features from '../components/Features'
import InteractiveMap from '../components/InteractiveMap'
import Activities from '../components/Activities'
import AccomodationOptionsSection from '../components/AccomodationOptions'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (

    <Layout>
      <Hero />
      <About />
      <Features />
      <InteractiveMap />
      <Activities />
      <AccomodationOptionsSection
        data={AccomodationOptionsData}
      />
    </Layout>

  )
}

const AccomodationOptionsData = [

  {
    id: 1,
    title: 'Caravans',
    image: '/hero-image.jpeg',
    button: 'Discover Retreates'
  },
  {
    id: 2,
    title: 'Camping',
    image: '/hero-image.jpeg',
    button: 'View Campsite'
  },
  {
    id: 3,
    title: 'Huts',
    image: '/hero-image.jpeg',
    button: 'View Huts'
  },

];
