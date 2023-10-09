import { Route, Routes } from 'react-router-dom';
import NavbarContainer from './components/Navbar';
import Dashboard from './pages/Dashboard';
import InventoryManagement from './pages/InventoryManagement';
import SalesManagement from './pages/SalesManagement';

function App() {
  return (
    <>
      <NavbarContainer />
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/inventory' element={<InventoryManagement />}></Route>
          <Route path='/sales' element={<SalesManagement />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
