import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import axios from "axios";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios.get(apiUrl).then((posts) => {
      const allRepos = posts.data.slice(0, 5);
      setAppState({ loading: false, posts: allRepos });
    });
  }, [setAppState]);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
