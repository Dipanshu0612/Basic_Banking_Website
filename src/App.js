import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Customers from "./Pages/Customers";
import TransactionsData from "./Pages/Transactions";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/customer-list" element={<Customers />} />
        <Route path="/transaction-history" element={<TransactionsData />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
