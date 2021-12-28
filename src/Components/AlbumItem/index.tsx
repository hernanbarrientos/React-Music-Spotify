import React from 'react';
import { Container, Title, Description, Image} from './styles';



export function AlbumItem() {
  return (
    <Container>
      <Image src="https://via.placeholder.com/180/170" />
      <Title> Nome do álbum</Title>
      <Description>Nome do artista</Description>    
      
    </Container>
  )
};