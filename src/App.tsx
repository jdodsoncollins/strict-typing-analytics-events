import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createTrackEvent } from './segment/track'
import { SegmentEventsMap } from './segment/maps'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // the following will fail type checking unless both event name and properties are in maps.ts
    createTrackEvent('WORKSPACE_BILLING_PAGE_VIEWED', {
      'USER_ID': '123'
    });
    createTrackEvent('WORKSPACE_MIGRATED', {
      'USER_ID': '123',
      'SOURCE': 'dashboard',
    });
    createTrackEvent('ASSETS_UPLOADED', {
      'USER_ID': '123',
      'SOURCE': 'dashboard'
    })
  }, [])

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
