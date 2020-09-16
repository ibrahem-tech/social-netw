import React, { useEffect, useState } from "react";
import axios from "./api/axios";
import Logo from "./signature.png";
import "./App.css";

import Video from "./components/Video";
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    /* db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );*/

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <img className="nav__logo" src={Logo} alt="my-logo" />
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
