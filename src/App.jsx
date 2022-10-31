import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map( info => {
    return (
      <Card 
        key={info.id}
        {...info}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <main>
        {cards}
      </main>
    </div>
  )
}
