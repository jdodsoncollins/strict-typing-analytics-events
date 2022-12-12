import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { trackEvent } from './analytics/track'

function App() {

  useEffect(() => {
    // start here -- see what happens if you change param 1 or the param 2 object without updating track.ts
    trackEvent('Workspace Plan Page Viewed', {
      'workspace id': 'asdf',
      'workspace plan type': 'agency',
      'workspace seat count': 0,
      'workspace is enterprise': false,
      'workspace initial number of seats': 0,
      'workspace new number of seats': 1,
      'workspace slug': 'asdf',
    });
    trackEvent('Site Plan Page Viewed', {
      'site id': 'asdf',
      'tab selected': 'business'
    });
  }, [])

  // everything below is vite react starter sample code
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
