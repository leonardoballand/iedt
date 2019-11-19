import React, { useState } from "react";

import FetchGithubUsers from "./components/FetchData";
import UsersList from "./components/UsersList";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  function onSearch({ target: { value } }) {
    setSearch(value);
  }

  return (
    <div className="App">
      <SearchBar value={search} onChange={onSearch} />

      <FetchGithubUsers query={search}>
        {({ items }) => <UsersList users={items} />}
      </FetchGithubUsers>
    </div>
  );
}

export default App;
