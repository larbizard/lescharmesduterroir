import { useRef, useEffect } from 'react'


import Head from 'next/head';

import Map from '../components/Map';

import styles from '../../styles/Home.module.css';


const DEFAULT_CENTER = [33.295175,-8.1506363]



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Les charmes du terroire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Les charmes du terroire
        </h1>

        <p className={styles.description}>
          Comment se rendre au gîte Les charmes du terroire depuis l'entrée d'autoroute Tnine Chtouka
        </p>

        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={15}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
            </>
          )}
        </Map>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
