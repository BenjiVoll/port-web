import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';
import { useGitHubData } from './hooks/useGitHubData.js';
import { initAnimations } from './animations/initAnimations.js';
import './index.css';

function App() {
  const { profile, repos, loading, refresh } = useGitHubData();

  useEffect(() => {
    const cleanup = initAnimations();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div className="app-shell">
      <InteractiveBackground />
      <Navbar />
      <main className="main-content">
        <Hero githubProfile={profile} repoCount={repos.length} />
        <About repoCount={repos.length} />
        <Projects
          githubRepos={repos}
          loadingGitHub={loading}
          onRefreshGitHub={refresh}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
