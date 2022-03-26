import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

import Contato from './components/pages/Contato';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
