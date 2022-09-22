import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useToast, Text } from '@chakra-ui/react';
import { PostContainer, Post } from '../../styles/appStyles';
import { getAllQuestions } from '../../firebase/helpers/questionHelper';

export default function PostSection({ targetUsername }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showToast = useToast();
  const user = useSelector(state => state.user?.user);
  const history = useHistory();

  useEffect(() => {
    if (!user) return;
    getAllQuestions(targetUsername).then(questionsFromFirestore => {
      setQuestions(questionsFromFirestore);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
      showToast({
        title: 'Failed to fetch data 😭',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })

    return () => {
      setQuestions([]);
    }
  }, [showToast, user, targetUsername])

  return (
    
    <PostContainer>
      <Text fontSize="45" color="black" style={{margin:30,fontWeight:"bold",borderBottomWidth:3, borderColor:"whitesmoke"}}>Questions</Text>
      {isLoading && (
        <SkeletonTheme color="var(--secondary-color)" highlightColor="#444">
          <Skeleton height={200} count={3} style={{ borderRadius: '25px', marginBottom: "10px" }} />
        </SkeletonTheme>
      )}
      
      {!isLoading && questions.map(question => (
        
        <Post className='post' onClick={() => history.push(`/question/${question?.id}`)} key={question?.id} >
          <h3>{question?.title}</h3>
          <p>{question?.description}</p>
          <div className='bottom'>
            <div className='tags'>
              {question?.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
            </div>
            <p>asked by <span onClick={() => history.push(`/user/${question?.username}`)}>@{question?.username}</span></p>
          </div>
        </Post>
      ))}
      
      {!isLoading && questions.length === 0 && (
        <Text fontSize="xl" color="black" style={{marginLeft:30}}>There is no questions</Text>
      )}
    </PostContainer>
  );
}