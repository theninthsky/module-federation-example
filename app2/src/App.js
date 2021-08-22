import { Button, Modal, Form } from 'reactstrap'

import Welcome from './components/Welcome'

const App = ({ className, onClose }) => (
  <div className={className}>
    <h2 style={{ color: 'blue' }}>App 2</h2>

    <Welcome />
    <Button onClick={onClose}>Hide</Button>
    <Modal />
    <Form />
  </div>
)

export default App
