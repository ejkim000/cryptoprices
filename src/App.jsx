import { Route, Routes } from 'react-router-dom';
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Price from './pages/Price';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price' element={<Price />} />
      </Routes>
    </>
  );
}

export default App;
