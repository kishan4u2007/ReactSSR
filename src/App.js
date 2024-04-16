import React from "react";
import Summary from "./components/summary";


function App() {
  return (
    <div>
    <Summary title="Section 1" content="Content of section 1" />
    <Summary title="Section 2" content="Content of section 2" />
    {/* Add more Accordions as needed */}
  </div>

  );
}

export default App;
