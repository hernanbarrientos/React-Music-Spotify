import React from 'react';
import { Container, Label, Input } from './styles';

type SearchBarProps = {
  handleSetTerm: (prop: string) => void;
  searchTerm: string|undefined;

}

export function SearchBar({handleSetTerm,  searchTerm}: SearchBarProps) {
  return (
    <Container>
      <Label>
        Busque por artistas, álbuns ou músicas
      </Label>
      <Input 
        value={searchTerm}
        onChange={(e)=>handleSetTerm(e.target.value) }
        placeholder="Comece a escrever..."/>
    </Container>
  )
};