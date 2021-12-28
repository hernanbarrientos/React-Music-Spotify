import React, { useState } from "react";
import { AlbumList } from "./Components/AlbumList";
import { Header } from "./Components/Header";
import { SearchBar } from "./SearchBar";
import { Default } from  './template/default'


function App() {

  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSetTerm = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <Default>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        handleSetTerm={handleSetTerm}
      />
      <AlbumList
        title={
          searchTerm
          ? `Resultados encontrados para "${searchTerm}"`
          : "Álbuns buscados recentemente"
          }
        
      />
      {
        !searchTerm &&
        <AlbumList
        title="Álbuns buscados recentemente"
        />
      }
      
    </Default>
  );
}

export default App;
