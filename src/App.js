import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Profile from "./components/Profile";

const USER_API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(USER_API)
      .then(res => res.json())
      .then(data => setProfiles(data));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filerProfile = profiles.filter(item => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="container">
      <h1>Hello</h1>
      <Search search={search} onHandleChange={handleChange} />
      <Profile profiles={filerProfile} />
    </div>
  );
};

export default App;
