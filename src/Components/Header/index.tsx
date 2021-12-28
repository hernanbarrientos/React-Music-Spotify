import React from 'react';
import { Container, Image } from './styles';
import Logo from '../../assets/images/logoSpotifyB&W.png'


export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
    </Container>
  )
};