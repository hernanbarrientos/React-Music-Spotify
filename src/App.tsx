import React from "react";
import { AlbumList } from "./Components/AlbumList";
import { Header } from "./Components/Header";
import { SearchBar } from "./SearchBar";
import { Default } from  './template/default'


function App() {
  return (
    <Default>
      <Header />
      <SearchBar />
      <AlbumList
        title="Álbuns buscados recentemente"
      />
      <AlbumList
        title="Álbuns buscados recentemente"
      />
    </Default>
  );
}

export default App;
