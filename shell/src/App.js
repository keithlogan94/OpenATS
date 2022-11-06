import logo from './logo.svg';
import './App.css';
import './scss/main.scss';
import './css/tailwind-compiled.css';

import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Dashboard />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
