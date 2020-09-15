import React from "react";
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* APP CONTAINER */}
      {/* VIDEOS */}
      {/* VIDEOS */}
      {/* VIDEOS */}
      {/* VIDEOS */}
      {/* VIDEOS */}
      {/* VIDEOS */}

      <div className="app__videos">
        <Video
          channel="user"
          description="Diamonds "
          song="Element - @Pop Smoke"
          likes={3323}
          messages={1234}
          shares={221}
        />
        <Video
          channel="user"
          description="Diamonds "
          song="Element - @Pop Smoke"
          likes={3323}
          messages={1234}
          shares={221}
        />
      </div>
    </div>
  );
}

export default App;
