import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px var(--paddingMain);
  margin-bottom: 8vh;
  
`;
export const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 2vh;
  column-gap:2vh;
  overflow-y: hidden;
  overflow-x: clip;
`

export const Subtitle = styled.h2`
  font-size: var(--fontMedium);
  color: var(--tertiary);
  margin-bottom: 35px;
  
`