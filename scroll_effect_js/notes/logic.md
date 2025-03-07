# Scroll Effect and Tab Navigation Logic (07 Mar 15:23)

- When the user scrolls through the menu items, the code detects which section is currently in view and highlights the corresponding tab.
- When a user clicks on a tab, the page automatically scrolls to the corresponding section.

**Event Listeners Setup**:

- Added event listeners for both scroll events on the items list and click events on the tabs
- Used a debounce technique for scroll events to improve performance

- **Initialization**:
  - Set the first tab ("Popular Items") as active by default when the page loads

**Tab Activation Logic**:

- Created a function `activateTab(tabId)` that handles:
  - Adding the "active" class to the selected tab
  - Removing the "active" class from all other tabs
- This function is called both when scrolling and when clicking tabs

- **Scroll-to-Section Logic**:

  - Implemented `scrollToSection(sectionIndex)` function that:
    - Calculates the correct scroll position based on the section's position and the top navigator's height.
    - Uses smooth scrolling for a better user experience.
    - Ensures the top of the section aligns with the bottom of the top navigator.
  - items-list is the scrollable viewport, means after calculation, items-list scrolls to the correct position.

- **Tab Click Navigation**:

  - When a tab is clicked, the code:
    - Activates the clicked tab
    - Scrolls the items list to bring the corresponding section into view

- **Scroll-Based Tab Activation**:

  - Added logic to detect which section is currently in the viewport while scrolling
  - Activates the corresponding tab when a new section comes into view
  - Uses a timeout to avoid excessive calculations during rapid scrolling (debouncing setup)

- **Auto-Centering Active Tab**:

  - Added functionality to ensure the active tab is visible in the tabs container
  - If the active tab is off-screen, the tabs container will automatically scroll to center it
