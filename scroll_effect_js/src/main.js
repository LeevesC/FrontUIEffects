document.addEventListener("DOMContentLoaded", () => {
  // Get all tabs and group sections
  const tabs = document.querySelectorAll(".tab");
  const groupSections = document.querySelectorAll(".group-section");
  // Get containers
  const tabsContainer = document.querySelector(".tabs-container");
  const topNavigator = document.querySelector(".top-navigator");
  const itemsList = document.querySelector(".items-list");

  // global variables
  const topNavHeight = topNavigator.offsetHeight;

  // Function to activate a tab and deactivate others
  function activateTab(tabId) {
    tabs.forEach((tab) => {
      if (tab.id === tabId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  // Function to scroll to a specific group section
  function scrollToSection(sectionIndex) {
    const section = groupSections[sectionIndex];
    // Scroll the section to just below the top navigator
    // console.log(section.offsetTop, topNavHeight);
    itemsList.scrollTo({
      top: section.offsetTop - topNavHeight,
      behavior: "smooth",
    });
  }
  // Add click event listeners to tabs
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(tab.id);
      scrollToSection(index);
    });
  });

  // Handle scroll events to update active tab
  let isScrolling;
  itemsList.addEventListener("scroll", () => {
    // Clear the timeout if a new scroll event occurs
    window.clearTimeout(isScrolling);
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(() => {
      const scrollPosition = itemsList.scrollTop + topNavHeight;

      // Find which section is currently in view
      let activeIndex = 0;
      groupSections.forEach((section, index) => {
        // If the top of the section is above the bottom of the top navigator
        // and the bottom of the section is below the bottom of the top navigator
        if (
          section.offsetTop <= scrollPosition &&
          (index === groupSections.length - 1 ||
            groupSections[index + 1].offsetTop > scrollPosition)
        ) {
          activeIndex = index;
        }
      });

      // Activate the corresponding tab
      activateTab(tabs[activeIndex].id);

      // Scroll the tabs container to make the active tab visible
      const activeTab = tabs[activeIndex];
      tabsContainer.scrollLeft =
        activeTab.offsetLeft -
        tabsContainer.offsetWidth / 2 +
        activeTab.offsetWidth / 2;
    }, 100);
  });

  // Initialize with the first tab active
  activateTab(tabs[0].id);
});
