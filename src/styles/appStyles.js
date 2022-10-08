import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:fit-content;
  height:fit-content;
  
  
    background: var(--question-color);
  
  
    

  .profile-hide {
    @media (max-width: fit-content) {
      display: none;
    }
  }
`

export const PostContainer = styled.div`
  width: auto;
  height: auto;
  margin-left: 30px;
  margin-top: 30px;
  

  @media (max-width: 1446px) {
    margin-right: 0px;
  }
`

export const Post = styled.div`
  background: var(--black);
  padding: 50px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 20px;
  box-shadow: 4px 4px 8px #000000;

  h3 {
    font-size: 28px;
    font-weight: 900;
    color: white;
  }

  p {
    font-size: 22px;
    color: var(--text-opacity-color);
    margin-top: 30px;
  }

  .bottom {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tags {
      display: flex;
      flex-direction: row !important;
      overflow-x: scroll;

      span {
        padding: 8px 20px;
        border-radius: 10px;
        border: 2px solid var(--accent-color);
        margin-right: 15px;
        font-size: 22px;
        white-space: nowrap;
      }
    }

    p {
      color: var(--text-color);
      font-size: 22px;

      span {
        color: var(--accent-color);
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  
  @media(max-width: 915px) {
    padding: 35px;

    h3 { font-size: 23px; }
    p { font-size: 20px; margin: 0 !important; }

    .bottom {
      flex-direction: column;
      align-items: flex-start;
    }

    .tags { 
      overflow-x: scroll; 
      max-width: 100%;
    }

    span { font-size: 20px !important }
  }
`

export const UserDetailsContainer = styled.div`
  width: 450px;
  background: var(--profile);
  border-radius: 25px;
  padding: 40px;
  margin-top:160px;
  height:fits content;
  margin-left:400px;

  .profile {
    display: flex;
    align-items: center;

    img {
      width: 73px;
      height: 73px;
      border-radius: 50%;
      border: 3px solid var(--accent-color);
      object-fit: cover;
    }

    div {
      display: flex;
      flex-direction: column;
      
    }

    h2 {
      font-size: 25px;
      font-weight: 600;
    }

    h3 {
      color: var(--text-opacity-color);
      font-size: 20px;
    }
  }

  .stats {
    h3 {
      margin-top: 10px;
      color: var(--text-opacity-color);
      font-size: 20px;
    }
    
    a {
      color: var(--accent-color);
      font-size: 20px;
    }

    p {
      margin-top: 10px;
      color: var(--text-opacity-color);
      font-size: 20px;
    }
  }

  button {
    width: 100%;
    margin-top: 30px;
    background: var(--accent-color);
    border-radius: 8px;
    height: 50px;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
`

