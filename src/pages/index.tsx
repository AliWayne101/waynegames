import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import Topics from '@/sections/Topics'
import Head from 'next/head'
import React from 'react'

const Index = () => {
  
  const hotTitles = [
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 0 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
  ];

  const shootingGames = [
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 0 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 0 },
    { name: "God of War", image: "/assets/samples/gow.jpg", platform: "PC", price: 550, originalPrice: 5000, quantity: 10 },
  ];

  return (
    <>
      <Head>
        <title>Games Heaven</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Topics gamesList={hotTitles} topicTitle={'Hot Titles'} />

        <Topics gamesList={shootingGames} topicTitle={'Shooting Games'} />
      </main>
      <Footer />
    </>
  )
}

export default Index