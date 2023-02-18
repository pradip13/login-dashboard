import './App.css';
import Navbar from './components/Navbar';
import Code from './components/Code';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import {Route, Routes} from "react-router-dom";

function App() { 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Code />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />

      </Routes>

    </>
  );
}

export default App;
