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

export default function Ask() {
  const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }



  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
   const [images, setImages] = useState([]);
   const [selectedImage, setSelectedImage] = useState(null);

  const [tagInputValue, setTagInputValue] = useState('');
  const [isMarkdownPreview, setIsMarkdownPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const showToast = useToast();
  const user = useSelector(state => state.user?.user);

  const isNotEmpty = (str) => str.trim().length !== 0;
  const canAskQuestion = isNotEmpty(title) && isNotEmpty(description) && isNotEmpty(body)&& tags.length !== 0;
 
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const askQuestion = () => {
    setIsLoading(true);
    saveQuestionToFirestore({
      title,
      description,
      tags,
      body,
      username: user?.username,
      userEmail: user?.email,
      preview
    
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
          <h3>Title ( {title.length} / 100 )</h3>
          <input
            placeholder='I need a fertiliser :('
            value={title}
            onChange={(e) => {
              if (e.target.value.length > 100) return;
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
        </div>
        <div className='input'>
          <h3>Short Description ( {description.length} / 250 )</h3>
          <textarea
            placeholder='Short explanation of your problem'
            value={description}
            style={{ resize: 'none' }}
            onChange={(e) => {
              if (e.target.value.length > 250) return;
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
        <input type='file' value={images} onChange={onSelectFile} accept="image/png, image/jpeg" />
            {selectedFile &&  <img src={preview} /> }
        </div>
        <div className='input markdown-edit'>
          <h3>Explain your problem ✍️ (Markdown supported)</h3>
          <button
            onClick={() => setIsMarkdownPreview(!isMarkdownPreview)}
            style={{ background: isMarkdownPreview ? 'var(--accent-color)' : 'var(--secondary-color)' }}
          >Show {isMarkdownPreview ? 'Raw' : 'Preview'}</button>
          {isMarkdownPreview ? <MarkdownPreview markdown={body} /> : <textarea
            placeholder='My plant had a huge green bug on it, with holes on the leafs'
            rows="20"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />}
        </div>
        <ButtonContainer>
          <ButtonContainer>
            <button
              onClick={askQuestion}
              style={isLoading || !canAskQuestion ? {
                opacity: '0.5',
                cursor: 'not-allowed',
              } : {}}
            >{isLoading ? <Spinner /> : 'Ask'}
            </button>
            <button
              onClick={() => history.push('/app')}
              style={isLoading ? {
                background: 'var(--error-color)',
                marginLeft: '10px',
                opacity: '0.5',
                cursor: 'not-allowed',
              } : {
                background: 'var(--error-color)',
                marginLeft: '10px',
              }}
              disabled={isLoading}
            >Cancel</button>
          </ButtonContainer>
        </ButtonContainer>
      </Container>
    </AuthWrapper>
  )
}
