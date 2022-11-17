import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const cards = data.map(info => {
    return (
      <Card 
        key={uuidv4()}
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
