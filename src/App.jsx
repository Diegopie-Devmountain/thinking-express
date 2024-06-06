import Workshops from './components/Workshops/Workshops.jsx';
import dummyData from './data/workshops.js';

import './App.css';


export default function App() {

  return (
    <main>
      <Workshops data={dummyData}/>
    </main>
  )
}
