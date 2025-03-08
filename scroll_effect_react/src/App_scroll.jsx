import "./App.css";
import { groupNames, mockData } from "./data/mockData";
import TopNavigator from "./components/TopNavigator";
import ItemsList from "./components/ItemsList";

function App_scroll() {
  return (
    <div className="app">
      <TopNavigator groups={groupNames} />
      <ItemsList groups={groupNames} items={mockData} />
    </div>
  );
}

export default App_scroll;
