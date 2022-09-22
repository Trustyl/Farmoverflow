import styled from 'styled-components';

export const SettingContainer = styled.div`
  width: 100%;
  height:1200px;
  background-color:white;

 
 

  div {
    width: 60%;
    margin-top: 30px;
    margin-left:30px;

    h3 {
      font-size: 25px;
    }

    input {
      margin-top: 10px;
      width: 100%;
      background: var(--black);
      padding: 20px;
      border-radius: 12px;
      font-size: 20px;
    }
    
    textarea {
      margin-top: 20px;
      width: 100%;
      background: var(--black);
      color: #fff;
      padding: 20px;
      font-size: 22px;
      border-radius: 12px;
    }
  }  
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color:white;
 

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    background: var(--accent-color);
    border-radius: 8px;
    height: 60px;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
`