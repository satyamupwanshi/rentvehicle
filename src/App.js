
import { BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import About from './pages/About' ;
import Home from './pages/Home' ;
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';

const App = () => {

        return (
          <>
        
          <Router>
            <header>
          <Link className="site-logo" to="/">#VanLife</Link>
          <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>

          </nav>
      </header>
            <Routes>
              <Route path="/" element={<Home/>}/>
              
              <Route path="/about" element={<About/>}/>
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetail />} />

            </Routes>
          </Router>
          </>
        )
      }

export default App ;
