import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './common/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage';
import Promienniki from './pages/Promienniki/Promienniki';
import Myjnie from './pages/Myjnie/Myjnie';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/promienniki" element={<Promienniki />} />
          <Route path="/myjnie" element={<Myjnie />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
