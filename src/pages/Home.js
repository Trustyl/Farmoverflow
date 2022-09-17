import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import seedling from '../assets/seedling.svg';
import { useHistory } from 'react-router-dom';
import { Container, Main, Content } from '../styles/homeStyles';

export default function Home() {
  const history = useHistory();

  return (
    <AuthWrapper authenticationRequired={false}>
      <Container>
        <Main>
          <div>
            <h1>
              Lets, <br />
              communicate <span>about plants</span>, <br />
              <span>Together</span> !!
            </h1>
            <button onClick={() => history.push('/login')}>Get Started</button>
          </div>
          <img src={seedling} alt="apple" />
        </Main>
        <Content>
          <h2>Farmlance, what ??</h2>
          <p>
            <span>Farmlance</span> is an online community to ask questions about
            your plants conditions . You can ask questions or help others by answering their questions .
            Its basically <span>StackOverflow</span> but for farmers or the agric industry
          </p>
          <button onClick={() => history.push('/login')}>Find solutions to your problem</button>
        </Content>
      </Container>
    </AuthWrapper>
  )
}
