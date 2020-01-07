import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Profile from "./components/Profile";

const USER_API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(USER_API)
      .then(res => res.json())
      .then(data => setProfiles(data));
  }, []);

  return (
    <div className="Container">
      <h1>Hello</h1>
      <Search />
      <Profile profiles={profiles} />
    </div>
  );
};

export default App;
