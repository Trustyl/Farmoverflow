import React from 'react';
import { HeaderContainerBlack, HeaderContainer, Button, StyledButton, AlertDiv } from '../styles/headerStyles';
import { useDisclosure } from '@chakra-ui/react';

import CustomModal from './Modal';

import logoText from '../assets/small.png';
import logoIcon from '../assets/small.png';
import downIcon from '../assets/down_icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { logout as userLogout } from '../redux/actions/userLogin';

import { useHistory } from 'react-router-dom';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.user?.user);

  const logout = () => {
    onClose();
    history.push('/app')
    dispatch(userLogout());
  }

  const redirect = (path) => {
    onClose();
    history.push(path);
  }

  return (
    <div>
       { !user &&<HeaderContainer >
      <div style={{ cursor: 'pointer',margin:50}} onClick={() => history.push('/app')}>
        <img className='logo-text' src={logoText} alt='celloverflow' />
        <img className='logo-icon' src={logoIcon} alt='celloverflow' />
      </div>
      {!user && <Button style={{ margin:50}} onClick={() => history.push('/login')}>Login</Button>}

      
{/* 
      {user && <CustomModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        ui={
          <Button>
            <p>{user.username}</p>
            <img src={downIcon} alt="more" />
          </Button>
        }
        title='Options ⚙️'
      >
        <AlertDiv>
          <StyledButton onClick={() => redirect(`/ask`)} style={{ background: 'var(--accent-color)' }}>Ask </StyledButton>
          <StyledButton onClick={() => redirect(`/user/${user?.username}`)} style={{ background: 'var(--accent-color)' }}>Profile </StyledButton>
        </AlertDiv>
        <AlertDiv>
          <StyledButton onClick={() => redirect(`/settings`)} style={{ background: 'var(--accent-color)' }}>Settings </StyledButton>
          <StyledButton onClick={logout} style={{ background: 'var(--error-color)' }}>Logout 🚶‍♂️</StyledButton>
        </AlertDiv>
      </CustomModal>} */}
    
    </HeaderContainer>}
   { user && <HeaderContainerBlack>
    <div style={{ cursor: 'pointer',margin:50}} onClick={() => history.push('/app')}>
        <img className='logo-text' src={logoText} alt='celloverflow' />
        <img className='logo-icon' src={logoIcon} alt='celloverflow' />
      </div> 

{ user && <div style={{marginLeft:870}}>
   <button style={{background:"#245b48",height:50,width:150,borderRadius:50,fontWeight:"bold",fontSize:16}} onClick={() => redirect(`/ask`)}>Ask a question</button>
</div>}
{ user && <div style={{marginRight:30}}>
   <button style={{background:"white",height:50,width:150,borderRadius:50,fontWeight:"bold",fontSize:20,color:"#245b48"}} onClick={logout}>Logout</button>
</div> }     
    </HeaderContainerBlack>} 
    </div>
    
  )
}
