
import { Route, Routes } from 'react-router';
import Home from './Home';
import Todolist from './Todolist';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Todolist' element={<Todolist/>} />
      </Routes>
    </div>
  );
}

export default App;
