import { useState, lazy, Suspense } from 'react'

import './App.css'

const App1 = lazy(() => import('app1/App'))
const App2 = lazy(() => import('app2/App'))

const App = () => {
  const [app2Visible, setApp2Visible] = useState(false)

  return (
    <div className="container">
      <h1>Shell</h1>

      <Suspense fallback="Loading app1...">
        <App1 />
      </Suspense>

      <br />

      {app2Visible ? (
        <Suspense fallback="Loading app2...">
          <App2 onClose={() => setApp2Visible(false)} />
        </Suspense>
      ) : (
        <button onClick={() => setApp2Visible(true)}>Show app2</button>
      )}
    </div>
  )
}

export default App
