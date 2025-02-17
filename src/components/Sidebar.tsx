import { SubSectionType } from "../types";

interface SidebarProps {
  sections: { id: string; title: string }[];
  activeSection: string;
  onSectionChange: (id: string) => void;
  isOpen: boolean;
}

export function Sidebar({
  sections,
  activeSection,
  onSectionChange,
  isOpen,
}: SidebarProps) {
  // console.log(sections)
  const subsections: SubSectionType = {
    introduction: [
      { id: "tech-stack", title: "Technology Stack" },
      { id: "database", title: "Database Structure" },
      { id: "authentication", title: "Authentication" },
    ],
    endpoints: [
      { id: "logs", title: "Logs" },
      { id: "atmmonitoring", title: "ATM Monitoring" },
      { id: "posmonitoring", title: "POS Monitoring" },
      // { id: 'categories', title: 'Categories' }
    ],
  };

  const handleClick = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-64 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto fixed left-0 top-0 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          {/* <Menu className="w-6 h-6 text-indigo-600" /> */}
          <h1 className="text-xl font-bold text-gray-900">PPA Payment API Document</h1>
        </div>
        <nav className="space-y-6">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 transition-colors ${
                  activeSection === section.id
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <strong>{section.title}</strong>
              </button>
              {activeSection === section.id &&
                subsections[section.id as keyof typeof subsections] && (
                  <div className="ml-4 space-y-1">
                    {subsections[section.id as keyof typeof subsections].map(
                      (subsection) => (
                        <a
                          key={subsection.id}
                          href={`#${subsection.id}`}
                          className="block px-4 py-1.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded"
                        >
                          {subsection.title}
                        </a>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
