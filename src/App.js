import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Potential XSS vulnerability using innerHTML 
  //test
  return (
    <div>
      <h1>Security Vulnerability Demo</h1>
      <input type="text" onChange={handleInputChange} />
      <p dangerouslySetInnerHTML={{ __html: userInput }} />
    </div>
  );
}

export default App;
