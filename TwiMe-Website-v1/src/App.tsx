import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Customize from './pages/Customize';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'customize' | 'gallery' | 'faq' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'customize':
        return <Customize />;
      case 'gallery':
        return <Gallery />;
      case 'faq':
        return <FAQ />;
      case 'privacy':
        return <Privacy />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
