// Get user data from session if exists

import React, { useEffect, useState } from 'react';
import getUserObject from '../../utils/loginHelper';
import { auth } from '../../firebase/firebase';
import { getUserData } from '../../firebase/helpers/userHelper';
import { useDispatch } from 'react-redux';
import { Login as userLogin } from '../../redux/actions/userLogin';
import { Flex } from '@chakra-ui/react';

export default function AuthInitializer({ children }) {
  const [isUserStateLoading, setIsUserStateLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsUserStateLoading(true);

    auth.onAuthStateChanged(userData => {
      if (!userData) {
        setIsUserStateLoading(false);
        return;
      };

      const user = getUserObject(userData);

      getUserData(user?.email).then(userData => {
        dispatch(userLogin(userData));
        setIsUserStateLoading(false);
      }).catch(() => {
        dispatch(userLogin(user));
        setIsUserStateLoading(false);
      });
    })
  }, [dispatch]);

  return (
    isUserStateLoading
      ? <Flex height="100vh" justifyContent="center" alignItems="center">
        <img src="https://media2.giphy.com/media/yyqOUPn5souNBSHUnU/giphy.gif?cid=ecf05e47ny6n6a9sk1jpgvu4crt6lr237qidausbfbu31ii7&rid=giphy.gif&ct=s" alt="Loading" />
      </Flex>
      : <div>
        {children}
      </div>
  )
}
