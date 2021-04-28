import { Button, Modal, Form } from 'reactstrap'

import Welcome from './components/Welcome'

const App = ({ onClose }) => (
  <div>
    <h2>App 2</h2>

    <Welcome />
    <Button onClick={onClose}>Hide</Button>
    <Modal />
    <Form />
  </div>
)

export default App
