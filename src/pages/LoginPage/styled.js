import styled from 'styled-components'


const glass = `rgba(255, 255, 255, 0.15)`
const glassInput = `rgba(255, 255, 255, 0.3)`
const glassBorder = `1px solid rgba(255, 255, 255, 0.2)`

export const Login = styled.div`
  min-height: 200px;
  min-width: 350px;

  background-color: ${glass};
  opacity: 80%;
  border-radius: 5px;
  padding: 20px;
  border: ${glassBorder};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & form {
    width: 100%;
    padding: 20px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  & input {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    padding: 8px;
    background-color: ${glassInput};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  & label {
    align-self: flex-start;
    font-size: 12px;
    color: black;
    margin-bottom: 3px;
    margin-top: -10px;
  }
  
  & span {
    height: 13px;
    font-size: 11px;
    color: crimson;
    margin-top: -15px;
    align-self: flex-start;
    margin-bottom: 5px;
  }
  
  & a {
    color: #7c1ddc;
    font-size: 12px;
    text-decoration: none;
  }
  
  & h1 {
    margin: 0;
  }
  
  & div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

