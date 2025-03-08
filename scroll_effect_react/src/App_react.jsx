import "./App.css";
import TopNavigator from "./components/TopNavigator";
import ItemsList from "./components/ItemsList";
import { mockData, groupNames } from "./data/mockData";
import { useState, useEffect, useRef } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("pop"); // Initial active tab
  const itemsListRef = useRef(null); // Ref for .items-list
  const tabsContainerRef = useRef(null); // Ref for .tabs-container
  const topNavigatorRef = useRef(null); // Ref for .top-navigator
  const sectionRefs = useRef([]); // Array of refs for .group-section

  // Sample data for group sections (replace with your actual content)
  const sections = [
    { id: "pop", label: "Popular Items" },
    { id: "offers", label: "Offers" },
    { id: "picked", label: "Picked for you" },
    { id: "new", label: "New" },
    { id: "specials", label: "Specials" },
  ];

  // Scroll to a section when tab is clicked
  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    const topNavHeight = topNavigatorRef.current.offsetHeight;
    if (section && itemsListRef.current) {
      itemsListRef.current.scrollTo({
        top: section.offsetTop - topNavHeight,
        behavior: "smooth",
      });
    }
    setActiveTab(sections[index].id);
  };
  // Handle scroll to update active tab
  useEffect(() => {
    const itemsList = itemsListRef.current;
    const tabsContainer = tabsContainerRef.current;
    const topNavHeight = topNavigatorRef.current.offsetHeight;
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = itemsList.scrollTop + topNavHeight;

        // Find the section in view
        let activeIndex = 0;
        sectionRefs.current.forEach((section, index) => {
          const nextSection = sectionRefs.current[index + 1];
          if (
            section.offsetTop <= scrollPosition &&
            (index === sections.length - 1 ||
              (nextSection && nextSection.offsetTop > scrollPosition))
          ) {
            activeIndex = index;
          }
        });

        const newActiveTab = sections[activeIndex].id;
        setActiveTab(newActiveTab);

        // Center the active tab in tabs-container
        const activeTabEl = tabsContainer.querySelector(`#${newActiveTab}`);
        if (activeTabEl) {
          tabsContainer.scrollLeft =
            activeTabEl.offsetLeft -
            tabsContainer.offsetWidth / 2 +
            activeTabEl.offsetWidth / 2;
        }
      }, 100); // Debounce delay
    };

    itemsList.addEventListener("scroll", handleScroll);
    return () => itemsList.removeEventListener("scroll", handleScroll); // Cleanup
  }, [sections]);

  // Ensure section refs are assigned
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, [sections]);

  return (
    <div className="app">
      <div className="top-navigator" ref={topNavigatorRef}>
        <div className="tabs-container" ref={tabsContainerRef}>
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`tab ${activeTab === section.id ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
            >
              {section.label}
            </div>
          ))}
        </div>
      </div>
      <div className="items-list" ref={itemsListRef}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="group-section"
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <h2>{section.label}</h2>
            <p>Content for {section.label} goes here...</p>
            {/* Simulate taller content */}
            <div style={{ height: "400px", background: "#ddd" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
