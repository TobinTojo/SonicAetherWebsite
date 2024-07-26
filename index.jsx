import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import About from "./components/about";
import Hero from "./components/hero";
import Devlog from "./components/devlog";
import Download from "./components/download";
import Community from "./components/community";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Devlog />
      <Download />
      <Community />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 