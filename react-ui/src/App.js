import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployee/>} />
            <Route path="/employees" element={<ListEmployee/>}/>
            <Route path="/add-employee" element={<AddEmployee/>}/>
            <Route path="/edit-employee/:id" element={<AddEmployee/>}/>
            <Route path="*" element={<ListEmployee/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
