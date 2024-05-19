import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import map from '../../../gambar/map.png';
import pointer from '../../../gambar/pointer.png';
import kunci from '../../../gambar/kunci.png';
import './Medan.css';
import Modal from "../../Modal";
import axios from 'axios';

const MapMedan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=3.5896654&lon=98.6738261&appid=ee3caa27713aaf95d3227ca5d5119cf4";
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

  const { name, character } = location.state || {};
  const [makananMedan1, setMakanan1] = useState(0);
  const [makananMedan2, setMakanan2] = useState(0);
  const [makananMedan3, setMakanan3] = useState(0);
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);

  const handleBuka = () => {
    displayModal("Map ini sudah selesai dijelajahi.");
  };

  const handleKunci = () => {
    displayModal("Kota ini masih terkunci!");
  };

  const handleMedan = () => {
    let totalMoney = money;
    totalMoney+=50;
    setMoney(totalMoney);
    setHealth(120);
    displayModal("Anda mendapatkan uang tambahan sejumlah 50!");
    displayModal("Darah anda bertambah menjadi 120!");
    navigate("/medan", { state: { name: name, character: character, health: health, money: totalMoney, weather: weather, weatherId: weatherId, makananMedan1: makananMedan1, makananMedan2:makananMedan2, makananMedan3:makananMedan3} });
  };

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
        <img src={pointer} alt="pointer1" className='hover:animate-bounce' id='pointer1' onClick={handleBuka} />
        <img src={pointer} alt="pointer2" className='hover:animate-bounce' id='pointer2' onClick={handleMedan} />
        <img src={kunci} alt="kunci2" className='animate-bounce w-12' id='kunci2' onClick={handleKunci} />
        <img src={kunci} alt="kunci3" className='animate-bounce w-12' id='kunci3' onClick={handleKunci} />
        <img src={kunci} alt="kunci4" className='animate-bounce w-12' id='kunci4' onClick={handleKunci} />
        <img src={kunci} alt="kunci5" className='animate-bounce w-12' id='kunci5' onClick={handleKunci} />
      </div>
      </div>
    </div>
  );
};

export default MapMedan;
