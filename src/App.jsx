import { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'

function App() {

  const api_actors = 'https://lanciweb.github.io/demo/api/actors/'
  const [actors, setActors] = useState([])

  const api_actresses = 'https://lanciweb.github.io/demo/api/actresses/'
  const [actresses, setActresses] = useState([])

  useEffect(() => {
    console.log('component mounted');

    fetch(api_actors)
      .then(response => response.json())
      .then(data_m => {
        console.log(data_m);
        setActors(data_m)
      })

    fetch(api_actresses)
      .then(response => response.json())
      .then(data_f => {
        console.log(data_f);
        setActresses(data_f)
      })

  }, [])



  return (
    <>
      <Header />

      <div className="cards-container">
        <Card actors={actors} actresses={actresses} />
      </div>
    </>
  )
}

export default App
