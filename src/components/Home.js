import React, { useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="home">
      {!clicked && (
        <button className="home-btn neon" id="click-here" onClick={handleClick}>
          Click Me
        </button>
      )}
      {clicked && (
        <>
          <h1>FrontEnd Recap</h1>
          <p>Today we'll be looking at:</p>
          <ol>
            <li>🏠 React Testing Library</li>
            <li>⭐ State</li>
            <li>⚓ React Hooks</li>
            <li>🔬 React Router</li>
            <li>🎷 Props</li>
            <li>🛣️ Events and forms</li>
          </ol>
        </>
      )}
    </div>
  );
};

export default Home;
