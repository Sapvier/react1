import styled from "styled-components";

export const UserListWrapper = styled.div`
  width: 90%;  
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255,255,255, 0.15);
  border: 1px solid rgba(255,255,255, 0.2);
  border-radius: 5px;

  @media (max-width: 800px) {
    & {
      padding: 10px;
      width: 95%;
    }
  }
  
  & div:first-child {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px grey solid;
    color: rgba(0,0,0, 0.65);
  }
   
  & p:hover {
    cursor: pointer;
    color: black;
  }
  
  & p:not(:first-child) {
    width: 30%;
  }
  
  & p:first-child {
    text-align: center;
    width: 10%;
  }
  `;

export const StyledUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgba(0,0,0, 0.65);
  
  &:hover {
    background-color: rgba(255,255,255, 0.1);
    color: black
  }
`;

export const DetailedStyledUser = styled.div`
  padding: 20px;
  opacity: 80%;
  border-radius: 5px;
  min-width: 320px;
  width: 30%;
  background-color: rgba(255,255,255, 0.15);
  border: 1px solid rgba( 255, 255, 255, 0.2 );
  
  & h1 {
    text-align: center;
    margin: 0;
    color: rgba(0,0,0, 0.8)
  }
  
  & form {
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    padding: 8px;
    background-color: rgba(255,255,255, 0.3);
    box-shadow: 0 5px 10px rgba(0,0,0, 0.15);
  }

  & input:disabled {
    cursor: not-allowed;
  }

  & label {
    align-self: flex-start;
    font-size: 12px;
    color: rgba(0,0,0, 0.8);
    margin-bottom: 3px;
    margin-top: -10px;
  }
  `