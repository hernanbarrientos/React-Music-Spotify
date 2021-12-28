import React from "react";
import { Header } from "./Components/Header";
import { SearchBar } from "./SearchBar";
import { Default } from  './template/default'


function App() {
  return (
    <Default>
      <Header />
      <SearchBar />
    </Default>
  );
}

export default App;
