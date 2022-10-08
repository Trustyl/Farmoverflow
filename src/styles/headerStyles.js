import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
width:1005;
  

  /* hiding & displaying logos accordingly  */
  img { width: 200px; }

  .logo-icon { display: none; }  

  @media (max-width: 800px) {

    .logo-icon { display: block; }
    .logo-text { display: none; }
    img { width: 40px; }
    
  }
  
`
export const HeaderContainerBlack= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--black-color);
  border-bottom-width: 3px;
  border-color: whitesmoke;
  border-radius:0;
  


  /* hiding & displaying logos accordingly  */
  img { width: 200px; }

  .logo-icon { display: none; }  

  @media (max-width: 800px) {

    .logo-icon { display: block; }
    .logo-text { display: none; }
    img { width: 40px; }
    
  }
  `
export const Button = styled.button`
    display: flex;
    align-items: center;

    background: var(--secondary-color);
    font-size: 20px;
    padding: 10px 18px;
    height: 52px;
    border-radius: 7px;
    transition: 0.3s;

    &:hover {
        opacity: 0.5;
    }

    p {
        margin-right: 10px;
    }

    img {
        width: 25px;
    }

    @media (max-width: 635px){
        p {
            display: none;
        }
    }
`

export const StyledButton = styled(Button)`
    width: 100%;
    justify-content: center;
    margin-top: 10px;
`

export const AlertDiv = styled.div`
    display: flex;

    button {
        margin: 5px;
        height: 100px;
    }
`