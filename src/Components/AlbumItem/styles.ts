import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 300px;
  text-align: center;
  align-items: center;
  background-color: var(--darkgray);
  border-radius: 0.5rem;
  padding-top: 2.5vh;
  
  
`;
export const Image = styled.img`
  width: 180px;
  height: 200px;
  border-radius: 1rem;
  
`;

export const Title = styled.h3`
  font-size: var(--fontSmall);
  color: var(--tertiary);
  margin: 10px;
   
`;

export const Description = styled.h4`
  font-size: var(--fontSmall);
  color: var(--secondary);
  
  
`;
