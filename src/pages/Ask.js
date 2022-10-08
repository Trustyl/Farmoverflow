import React, { useState, useEffect } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import MarkdownPreview from '../components/MarkdownPreview';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from '../styles/askStyles';
import { ButtonContainer } from '../styles/settingStyles';
import { Spinner, useToast } from '@chakra-ui/react';
import { saveQuestionToFirestore } from '../firebase/helpers/questionHelper';
import ImageUploading from 'react-images-uploading';
import ImageUploader from "react-images-upload";
import props from 'prop-types';
import { v4 } from "uuid";
import { storage} from "../firebase/firebase";


export default function Ask() {
    const [preview, setPreview] = useState()
   
   
    
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  

  const [tagInputValue, setTagInputValue] = useState('');
  const [isMarkdownPreview, setIsMarkdownPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const showToast = useToast();
  const user = useSelector(state => state.user?.user);

  const isNotEmpty = (str) => str.trim().length !== 0;
  const canAskQuestion = isNotEmpty(title) && isNotEmpty(description) && isNotEmpty(body) && tags.length !== 0;
 
  const maxNumber = 69;
 

  const askQuestion = () => {
    setIsLoading(true);
    saveQuestionToFirestore({
      title,
      description,
      tags,
      body,
      username: user?.username,
      userEmail: user?.email,
      
    
    }).then(() => {
      setIsLoading(false);
      showToast({
        title: 'Created question successfully 🥳',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'success',
      });
      history.push('/app');
    }).catch((err) => {
      console.log(err);
      showToast({
        title: 'Failed to create ask question 🤐',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  
  }

  return (
    <AuthWrapper authenticationRequired={true}>
      <Container>
        <h2>Post your problems and find solutions</h2>
        <div className='input'>
          <h3>Title ( {title.length} / 25 )</h3>
          <input
            placeholder='I need a fertiliser :('
            value={title}
            onChange={(e) => {
              if (e.target.value.length > 25) return;
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='input'>
          <h3>Tags ( separate tag by a , )</h3>
          {tags.length > 0 && <div className='tags'>
            {tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
          </div>}
          <input 
            placeholder='Fertilizer, soil'
            value={tagInputValue}
            onChange={(e) => {
              let inputVal = e.target.value;
              let tagsFromValue = inputVal.split(',').filter(tag => tag.trim().length !== 0);
              setTagInputValue(inputVal);
              setTags(tagsFromValue)
            }}
          />
          <div className="main">
            <div className="uploadimage">
                <label htmlFor="imgs">Upload</label>
            </div>
            
        </div>
      
        
        <div  style={{marginTop:-360,marginLeft:570}}>
          <h3>Short Description ( {description.length} / 250 )</h3>
          <textarea style={{marginTop:10}}
            placeholder='Short explanation of your problem'
            value={description}
            style={{ resize: 'none' }}
            onChange={(e) => {
              if (e.target.value.length > 250) return;
              setDescription(e.target.value);
            }}
          />
        </div>
       </div>
        <div className='input markdown-edit' style={{marginLeft:600}}>
          <h3 style={{marginLeft:20}}>Explain your problem ✍️ (Markdown supported)</h3>
          <button
            onClick={() => setIsMarkdownPreview(!isMarkdownPreview)}
            style={{ marginRight:50,background: isMarkdownPreview ? 'var(--accent-color)' : 'var(--secondary-color)' }}
          >Show {isMarkdownPreview ? 'Raw' : 'Preview'}</button>
          {isMarkdownPreview ? <MarkdownPreview markdown={body} /> : <textarea
            placeholder='My plant had a huge green bug on it, with holes on the leafs'
            rows="20"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />}
        </div>
        <ButtonContainer>
          <ButtonContainer >
            <button
              onClick={askQuestion}
              style={isLoading || !canAskQuestion ? {
                opacity: '0.5',
                cursor: 'not-allowed',
                width: 200,
                marginLeft:400,
                marginTop:60,
              } : { width: 200,marginLeft:400,
                marginTop:60,}}
            >{isLoading ? <Spinner style={{width: 200,marginLeft:400,
              marginTop:60,}} /> : 'Ask'}
            </button>
            <button
              onClick={() => history.push('/app')}
              style={isLoading ? {
                background: 'var(--error-color)',
                marginLeft:500,
                opacity: '0.5',
                cursor: 'not-allowed',
                marginRight:400,
                
              } : {
                background: 'var(--error-color)',
                width: 200,
                marginRight:500,
                marginTop:60,
              }}
              disabled={isLoading}
            >Cancel</button>
          </ButtonContainer>
        </ButtonContainer>
      </Container>
    </AuthWrapper>
  )
}
