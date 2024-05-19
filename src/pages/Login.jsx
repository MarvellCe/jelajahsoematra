import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import maskotImage from '../gambar/maskott.png';
import login from '../gambar/login.png';
import nama from '../gambar/nama.png';
import './login.css';
import start from "../gambar/start.png";

const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
const handleSaveName = (e) => {
  setName(e.target.value);
};

const handleSubmit = () => {
  navigate('/character', { state: { name: name } });
};

  return (
    <div className='fixed w-full h-screen font-custom'>
      <img 
      src={login}
      alt='Login'
      className='fixed w-full h-screen'/>
      <div className='grid place-items-center relative'>
        <div className='text-center '>
          <img src={maskotImage} alt='Maskot ' className='m-auto mt-36 w-4/12 motion-safe:animate-[bounce_2s_ease-in-out_infinite] max-sm:mt-24 max-sm:w-1/2'/>  
          <img src={nama} className='imgnama mx-auto' />
          <input
          type='text'
          placeholder='Enter your Username'
          value={name}
          onChange={handleSaveName}
          className='outline-none bg-transparent text-xl text-black text-center'/>
          <br></br>
          <img src={start} 
          onClick={handleSubmit}
          className='w-2/12 mx-auto cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]' />
        </div>
        
      </div>
    </div>
  );
};

export default Login;