import Hello from './components/Hello'

const App = ({ className }) => (
  <div className={className}>
    <h2 style={{ color: 'green' }}>App 1</h2>

    <Hello />
  </div>
)

export default App
