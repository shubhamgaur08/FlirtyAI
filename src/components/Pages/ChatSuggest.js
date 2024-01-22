import React, { useState } from 'react';
import img from './images/p13.png'
import './ChatSuggest.css'
import Reply from './Reply';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
function ChatSuggest() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ask,setAsk]=useState('')
  const [reply,setReply]=useState([])
  const [loading,setLoading]=useState(false)
  const [tone, setTone] = useState('flirty');
  const [gender, setGender] = useState('girl');
  const [lang, setLang] = useState('english');
  const [im, setIm] = useState(true);
  
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setIm(false);
  };

  const handleSubmit = (e) => {
    setLoading(true)
    setReply([]);
    
    e.preventDefault();
    if (selectedFile) {
      
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('ask', ask);
      formData.append('gender', gender);
      formData.append('lang', lang);
      formData.append('tone', tone);


      fetch('https://flirty-bear-backend.vercel.app/Chat', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setReply(data)
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };
  
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

  return (
    <div>
      
      <div className='image-upload-container'>
        <span className='title1'>Let The  <span className='title2'>A.I</span> Help What To Reply</span>  
      <form onSubmit={handleSubmit}>
      <Button required className='upload-button' type="submit"  id="upload-button" component="label" variant="contained" onChange={handleFileInput}>
      
      <i class="fa-solid fa-cloud-arrow-up" ></i>
      Upload Chat Screenshot
      <VisuallyHiddenInput type="file" />
    </Button>
        <div className='image-preview'>
        {selectedFile && (
          <img  className='image'
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
          />
        )}
      </div>
      <img className="img" id='img' src={img} alt="chat" />
        {/* <TextField
         
          id="outlined-required"
          label="Describe The Person Here"
          defaultValue="love"
          type="text"
          value={ask}
          multiline
          color='secondary'
          sx={{ m: 1, minWidth: 260 }}
           onChange={(event) => setAsk(event.target.value)}
        /> */}
        <input placeholder="Type Some Info About Chat..💕" type="text" name="text"required
          className='input'
          
          
          defaultValue="love"
          
          value={ask}

        
          
          
           onChange={(event) => setAsk(event.target.value)} ></input>
            <div className='selector'>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={tone}
        value={tone}
        label="tone"
        color='secondary'
        onChange={(event) => setTone(event.target.value)}
        sx={{ m:0.5, minWidth: 50,borderRadius: 4 }} size="small"
      >
        
    
        <MenuItem value="flirty">Flirty</MenuItem>
        <MenuItem value="impressive">Impressive</MenuItem>
        
        
      </Select>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={gender}
        value={gender}
        label="gender"
        color='secondary'
        onChange={(event) => setGender(event.target.value)}
        sx={{ m:0.5, minWidth: 50,borderRadius: 4  }} size="small"
      >
        
    
        <MenuItem value="girl"> For Girl</MenuItem>
        <MenuItem value="boy">For Boy</MenuItem>
        
      </Select>

       <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={lang}
        value={lang}
        label="Language"
        color='secondary'
        onChange={(event) => setLang(event.target.value)}
        sx={{ m:0.5,  minWidth: 50,borderRadius: 4  }} size="small"
      >
        
    
        <MenuItem value="english"> English</MenuItem>
        <MenuItem value="hindi">Hindi</MenuItem>
        
      </Select>
      </div>
        <Button disabled={im} id='generate' type="submit" variant="contained">{loading ? 'Generating...' : `Generate Replies`}</Button>
      </form>
      <div className="caption-container">
      {reply.map((cap, index) => (
        <Reply key={index} text={cap} />
      ))}
      </div>
      </div>
     

    </div>
  );
}

export default ChatSuggest;