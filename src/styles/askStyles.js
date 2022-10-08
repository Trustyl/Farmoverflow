import styled from 'styled-components';

export const Container = styled.div`
 
  height:1500px;
  background-color:white;

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
    color:black;
    font-weight:900;
    margin-left:30px;
  }

  .input {
    margin-bottom: 20px;
    margin-left:30px;

    h3 {
      margin-bottom: 10px;
    }
  }

  h3 {
    font-size: 22px;
    color: black;
    margin-left:30px;
  }

  input {
    margin-top: 10px;
    margin-left:30px;
    width: 30%;
    background: var(--black);
    padding: 20px;
    border-radius: 12px;
    font-size: 20px;
    box-shadow: 4px 4px 8px #000000;
  

  }
  
  textarea {
    width: 80%;
    height: 280px;
    background: var(--black);
    color: #fff;
    padding: 20px;
    font-size: 22px;
    border-radius: 12px;
  }

  .tags {
    display: flex;
    margin-bottom: 10px;
    overflow-x: scroll;
    color:black;

    span {
      padding: 8px 20px;
      border-radius: 10px;
      border: 2px solid var(--accent-color);
      margin-right: 15px;
      font-size: 22px;
      white-space: nowrap;
    }
  }

  .markdown-edit {
    button {
      margin-top: 10px;
      margin-bottom: 20px;
      border-radius: 8px;
      height: 30px;
      font-size: 20px;
      transition: 0.3s;
      padding: 0px 13px;
      margin-right:-40px
      
      &:hover {
        opacity: 0.5;
      }
    }
  }
`