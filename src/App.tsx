import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { EndpointCard } from './components/EndpointCard';
import { documentation } from './data/documentation';
import { Menu } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'endpoints', title: 'Endpoints' },
  ];

  // Handle hash change for direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (activeSection === 'introduction') {
      return (
        <div className="prose prose-indigo max-w-none">
          <h1 id="introduction">{documentation.introduction.title}</h1>
          <p>{documentation.introduction.content}</p>
          {documentation.introduction.subsections?.map((subsection) => (
            <div key={subsection.id} className="mt-8" id={subsection.id}>
              <h2>{subsection.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: subsection.content }} />
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'endpoints') {
      return (
        <div>
          <h1 id="endpoints" className="text-3xl font-bold text-gray-900 mb-8">API Endpoints</h1>
          <div className="space-y-12">
            <section id="authentication">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Authentication
                <a href="#authentication" className="ml-2 text-indigo-500 text-sm hover:text-indigo-600">
                  #
                </a>
              </h2>
              {documentation.endpoints.slice(0, 2).map((endpoint, index) => (
                <EndpointCard key={index} endpoint={endpoint} />
              ))}
            </section>
            <section id="posts">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Posts
                <a href="#posts" className="ml-2 text-indigo-500 text-sm hover:text-indigo-600">
                  #
                </a>
              </h2>
              {documentation.endpoints.slice(2, 4).map((endpoint, index) => (
                <EndpointCard key={index} endpoint={endpoint} />
              ))}
            </section>
            <section id="categories">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Categories
                <a href="#categories" className="ml-2 text-indigo-500 text-sm hover:text-indigo-600">
                  #
                </a>
              </h2>
              {documentation.endpoints.slice(4).map((endpoint, index) => (
                <EndpointCard key={index} endpoint={endpoint} />
              ))}
            </section>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-4 z-30 bg-white rounded-r-lg p-2 shadow-md transition-all duration-300 ${
          isSidebarOpen ? 'left-64' : 'left-0'
        }`}
      >
        <Menu className="w-6 h-6 text-indigo-600" />
      </button>
      
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={isSidebarOpen}
      />
      
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-0'}`}>
        <div className="max-w-4xl mx-auto py-12 px-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;