import { useState, lazy, Suspense } from 'react'

import Hello from './components/Hello'
import Title from 'components/Title'

import style from './App.css'

import App1 from 'app1/App'

const App2 = lazy(() => import('app2/App'))

const App = () => {
  const [app2Visible, setApp2Visible] = useState(false)

  return (
    <div className={style.container}>
      <Title>Shell</Title>

      <Hello />

      <div className={style.apps}>
        <App1 className={style.app1} />

        {app2Visible ? (
          <Suspense fallback="Loading app2...">
            <App2 className={style.app2} onClose={() => setApp2Visible(false)} />
          </Suspense>
        ) : (
          <button onClick={() => setApp2Visible(true)}>Show app2</button>
        )}
      </div>
    </div>
  )
}

export default App
