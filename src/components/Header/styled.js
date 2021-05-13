import styled from 'styled-components'


export const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  height: 90px;
  top: 0;
  background-color: rgba(255,255,255, 0.1);
  border: 1px solid rgba( 255, 255, 255, 0.2 );
  z-index: 100;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
`;
