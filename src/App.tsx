import {lazy} from 'react';
import './App.css'

const LeadersTable = lazy(() => import('./components/leadersTable/leadersTable'))

function App() {
  return (
    <div>
      <header className='App-header'>
        <LeadersTable/>
      </header>
    </div>
  );
}

export default App;
