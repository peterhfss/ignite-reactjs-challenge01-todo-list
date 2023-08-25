
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import InfoTasks from './Components/InfoTasks/InfoTasks';
import ListEmpty from './Components/ListEmpty/ListEmpty';

import './global.module.scss';

const App = () => {
  

  return (
    <>
      <Header />
      <Form />
      <InfoTasks />
      <ListEmpty />
    </>
  )
}

export default App
