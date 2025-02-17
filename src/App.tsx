import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { EndpointCard } from "./components/EndpointCard";
import { documentation } from "./data/documentation";
import { Menu } from "lucide-react";
import { Request, Section } from "./types";

function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const intro: Section = documentation.introduction[0];

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "endpoints", title: "Endpoints" },
  ];


  // Handle hash change for direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    if (activeSection === "introduction") {
      return (
        <div className="prose prose-indigo max-w-none">
          <h1 id={intro.title}>{intro.title}</h1>
          <p>{intro.content}</p>
          {intro.subsections?.map((subsection) => (
            <div key={subsection.id} className="mt-8" id={subsection.id}>
              <h2>{subsection.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: subsection.content }} />
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === "endpoints") {
      return (
        <div>
          <h1 id="endpoints" className="text-3xl font-bold text-gray-900 mb-8">
            API Endpoints
          </h1>
          <div className="space-y-12">
            {documentation.endpoints.map((endpoint, index) => (
              <section id={endpoint.id}>
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                  {endpoint.title}
                  <a
                    href="#authentication"
                    className="ml-2 text-indigo-500 text-sm hover:text-indigo-600"
                  >
                    #
                  </a>
                </h2>
                {endpoint.requests.map((request) => (
                  <EndpointCard key={index} request={request as Request} />
                ))}
              </section>
            ))}
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
          isSidebarOpen ? "left-64" : "left-0"
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

      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        <div className="max-w-4xl mx-auto py-12 px-8">{renderContent()}</div>
      </main>
    </div>
  );
}

export default App;
