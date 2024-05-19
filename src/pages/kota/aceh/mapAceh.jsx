import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import map from '../../../gambar/map.png';
import pointer from '../../../gambar/pointer.png';
import kunci from '../../../gambar/kunci.png';
import './Aceh.css';
import axios from 'axios';
import Modal from "../../Modal";

const Map = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=5.534512&lon=95.350342&appid=ee3caa27713aaf95d3227ca5d5119cf4";
  const [weather, setWeather] = useState([]);
  const [weatherId, setWeatherId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleWeather = () => {
    return axios.get(urlWeather).then((res) => {
      setWeather(res.data.weather[0].main);
      setWeatherId(res.data.weather[0].id);
    });
  };
  
  useEffect(() => {
    handleWeather();
  }, []);

  const { name, character} = location.state || {};
  const [makananAceh1, setMakanan1] = useState(location.state?.makananAceh1);

  const [makananAceh2, setMakanan2] = useState(location.state?.makananAceh2);

  const [makananAceh3, setMakanan3] = useState(location.state?.makananAceh3);
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);
  
    const handleAceh = () => {
        navigate("/aceh", { state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId, makananAceh1: makananAceh1, makananAceh2:makananAceh2, makananAceh3:makananAceh3} });
    };
    
    const handleKunci = () => {
      displayModal("Kota ini masih terkunci!");
    }

  return (
    <div className='font-custom'>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      <div className='container-map '>
        <img src={map} alt="map" className='map ' />
        <div className='relative'>
        <img src={pointer} alt="pointer1" className='hover:animate-bounce' id='pointer1' onClick={handleAceh} />
        <img src={kunci} alt="kunci1" className='animate-bounce w-12' id='kunci1' onClick={handleKunci} />
        <img src={kunci} alt="kunci2" className='animate-bounce w-12' id='kunci2' onClick={handleKunci} />
        <img src={kunci} alt="kunci3" className='animate-bounce w-12' id='kunci3' onClick={handleKunci} />
        <img src={kunci} alt="kunci4" className='animate-bounce w-12' id='kunci4' onClick={handleKunci} />
        <img src={kunci} alt="kunci5" className='animate-bounce w-12' id='kunci5' onClick={handleKunci} />
      </div>
      </div>
    </div>
  );
};

export default Map;
