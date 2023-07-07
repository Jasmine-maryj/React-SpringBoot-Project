import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployee />}/>
            <Route exact path="/api/v1/employees/all" element={<ListEmployee />}/>
          </Routes>
          
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
