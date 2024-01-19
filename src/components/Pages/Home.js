import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Caption from '../Caption';
import './Home.css';
import Button from '@mui/material/Button';
import Typewriter from "typewriter-effect";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import login from './images/flirt3.png'
function Home() {
  const [word, setWord] = useState('');
  const [tone, setTone] = useState('flirty');
  const [gender, setGender] = useState('girl');
  const [lang, setLang] = useState('english');
  const [captions, setCaptions] = useState([]);
  const [loading, setloading] = useState(false);

  const handleSubmit = (event) => {
    setCaptions([]);
    event.preventDefault();
    // Perform your POST request with the word data
    // using fetch or any other HTTP library
    console.log(JSON.stringify({ word}))
    fetch('https://flirty-bear-backend.vercel.app/generate-lines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word, tone, gender, lang })
      
    },
    setloading(true))
      .then((response) =>{setloading(false)
        return response.json();})
      .then(data => {
        
        setCaptions(data);
        console.log(data)
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div>
      <div className="header">
        
      
      <form onSubmit={handleSubmit} className="form">
      
        <h2 id="title">FLIRT AND FUN WITH A.I</h2>
            <h1 className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "For Boys!",
                    "For Girls!"
                   
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <img className='image' src={login} alt="image" />
      <TextField
          required
          id="outlined-required"
          label="Describe The Person Here"
          defaultValue="love"
          type="text"
          value={word}
          multiline
          color='secondary'
          sx={{ m: 1, minWidth: 260 }}
           onChange={(event) => setWord(event.target.value)}
        />
       
      <div className='selector'>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={tone}
        value={tone}
        label="tone"
        color='secondary'
        onChange={(event) => setTone(event.target.value)}
        sx={{ m:0.5, minWidth: 50 }} size="small"
      >
        
    
        <MenuItem value="flirty">Flirty</MenuItem>
        <MenuItem value="funny">Funny</MenuItem>
        
      </Select>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={gender}
        value={gender}
        label="gender"
        color='secondary'
        onChange={(event) => setGender(event.target.value)}
        sx={{ m:0.5, minWidth: 50 }} size="small"
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
        sx={{ m:0.5,  minWidth: 50 }} size="small"
      >
        
    
        <MenuItem value="english"> English</MenuItem>
        <MenuItem value="hindi">Hindi</MenuItem>
        
      </Select>
      </div>
    

        <Button type="submit" variant="contained">{loading ? 'Generating...' : `Generate ${tone} Lines`}</Button>
        {/* <input
          
         
        /> */}
        {/* <button  type="submit">{loading ? 'Generating...' : 'Generate Caption'}</button> */}
      </form>
      </div>
      <div className="caption-container">
      {captions.map((cap, index) => (
        <Caption key={index} text={cap} />
      ))}
      </div>

      
      
    </div>
  );
}

export default Home;