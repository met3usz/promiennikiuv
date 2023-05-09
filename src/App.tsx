import { Routes, Route, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation } from './common/Navigation/Navigation';
import { MainPage } from './pages/MainPage/MainPage';
import Promienniki from './pages/Promienniki/Promienniki';
import Myjnie from './pages/Myjnie/Myjnie';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="promienniki" element={<Promienniki />} />
        <Route path="myjnie" element={<Myjnie />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
