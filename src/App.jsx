import { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Selector from './components/Selector'

function App() {

  const api_actors = 'https://lanciweb.github.io/demo/api/actors/'
  const [actors, setActors] = useState([])

  const api_actresses = 'https://lanciweb.github.io/demo/api/actresses/'
  const [actresses, setActresses] = useState([])

  const all = [...actors, ...actresses]
  const [selector, setSelector] = useState('all')

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
      <Selector setSelector={setSelector} />

      <div className="cards-container">
        <Card actors={actors} actresses={actresses} all={all} selector={selector} />
      </div>
    </>
  )
}

export default App
