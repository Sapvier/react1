import styled from "styled-components";

let purple = `#7c1ddc`

export const Button = styled.button`
  min-width: 120px;
  height: 30px;
  cursor: pointer;
  background-color: ${purple};
  box-shadow: 0 5px 10px 5px rgba(124,29,220, 0.15);
  border: none;
  border-radius: 5px;
  color: white;
  align-self: ${props => props.align};
  
  &:hover {
    background-color: rgba(255,255,255, 0.3);
    border: 1px #7c1ddc solid;
    color: ${purple};
    transition: all .5s ease;
  }
  `;