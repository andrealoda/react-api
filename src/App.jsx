import { useState, useEffect } from 'react'

function App() {

  const api_actors = 'https://lanciweb.github.io/demo/api/actors/'
  const api_actress = 'https://lanciweb.github.io/demo/api/actresses/'

  useEffect(() => {
    console.log('component mounted');

    fetch(api_actors)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })

    fetch(api_actress)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })

  }, [])



return (
  <>



  </>
)
}

export default App
