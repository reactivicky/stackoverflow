import React from 'react';
import ListContainer from './components/ListContainer/ListContainer';
import { ListProvider } from './ListContext'
import ModalComponent from './components/Modal/Modal';

const App: React.FC = () => {
  return (
    <ListProvider>
      <div>
        <h1 style={{ textAlign: 'center' }}>StackOverflow Clone</h1>
        <ListContainer />
        <ModalComponent />
      </div>
    </ListProvider>
  );
}

export default App;

// https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=withbody