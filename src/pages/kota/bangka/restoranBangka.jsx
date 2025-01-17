import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import makanan1 from "./gambar/makananBangka1.png";
import makanan2 from "./gambar/makananBangka2.png";
import makanan3 from "./gambar/makananBangka3.png";
import restoran from "../../../gambar/restoran.png";
import "./Bangka.css";
import Modal from "../../Modal";
import bgmakanan from "../../../gambar/bgmakanan.png";
import button1 from "../../../gambar/button.png";
import button2 from "../../../gambar/button2.png";
import bgmRestoran from "../../../audio/bsRestoran.mp3";

const Restoran = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, health, weather, weatherId } = location.state || {};
  const [makananBangka1, setMakanan1] = useState(location.state?.makananBangka1);

  const [makananBangka2, setMakanan2] = useState(location.state?.makananBangka2);

  const [makananBangka3, setMakanan3] = useState(location.state?.makananBangka3);
  const [money, setMoney] = useState(location.state?.money);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [buttonImage1, setButtonImage1] = useState(button1);
  const [buttonImage2, setButtonImage2] = useState(button1);
  const [buttonImage3, setButtonImage3] = useState(button1);
  const [changeButton, setChangeButton] = useState(false);

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleTambah1 = () => {
    if (changeButton) return;
    setChangeButton(true);
    setButtonImage1(button2);

    setTimeout(() => {
      setButtonImage1(button1);
      setChangeButton(false);
    }, 400);

    if (money > 0) {
      setMoney(money - 10);
      setMakanan1(makananBangka1 + 1);
    } else {
      displayModal(" Uang kamu tidak cukup :(");
    }
  };

  const handleTambah2 = () => {
    if (changeButton) return;
    setChangeButton(true);
    setButtonImage2(button2);

    setTimeout(() => {
      setButtonImage2(button1);
      setChangeButton(false);
    }, 400);

    if (money > 0) {
      setMoney(money - 10);
      setMakanan2(makananBangka2 + 1);
    } else {
      displayModal("Uang kamu tidak cukup :(");
    }
  };

  const handleTambah3 = () => {
    if (changeButton) return;
    setChangeButton(true);
    setButtonImage3(button2);

    setTimeout(() => {
      setButtonImage3(button1);
      setChangeButton(false);
    }, 400);

    if (money > 0) {
      setMoney(money - 10);
      setMakanan3(makananBangka3 + 1);
    } else {
      displayModal("Uang kamu tidak cukup :(");
    }
  };

  const handleBangka = () => {
    navigate("/Bangka", {
      state: {
        name: name,
        character: character,
        health: health,
        money: money,
        weather: weather,
        weatherId: weatherId,
        makananBangka1: makananBangka1,
        makananBangka2: makananBangka2,
        makananBangka3: makananBangka3,
      },
    });
  };

  const [selamat, setSelamat] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelamat(false);
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  const [music, setMusic] = useState(true);
  const audioRefRestoran = useRef(null);

  const handleBGM = () => {
    if (music){
      audioRefRestoran.current.play();
    }
  };

  useEffect(() => {
    handleBGM();
  }, []);

  return (
    <div className="absolute w-full h-screen font-custom">
      <audio ref={audioRefRestoran}
       src={bgmRestoran} 
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      <div
        className="absolute min-h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${restoran})` }}
      >
        {selamat ? (
          <div id="selamat" className="w-[650px] h-[140px] mx-auto mt-[300px]"
          style={{backgroundImage: `url(${bgmakanan})`}}>
            <img />
          <h1 className="text-5xl text-white text-center pt-[25px]">
            Selamat Datang Di Restoran !!!
          </h1>
          </div>
        ) : (
          <div className="relative text-black">
            <div className="text-black">
              <h1 className="text-white">Haloo, {name}</h1>
              <div className="flex p-1">
                <h2 className="bg-red-100 w-40 p-2 text-center">
                  HEALTH : {health}/200
                </h2>
                <h2 className="bg-yellow-100 w-40 p-2 text-center">
                  Money : {money}
                </h2>
                <h2 className="bg-green-100 w-40 p-2 text-center">
                  Weather : {weather}
                </h2>
              </div>
            </div>

            <div className="flex justify-around my-12 m-4">
              <div className="grid place-items-center text-white w-[380px] h-[430px] mx-8 rounded-[24px]"
              style={{backgroundImage: `url(${bgmakanan})`}}>
                <h3 className="mt-4">Jumlah yang dimiliki : {makananBangka1}</h3>
                <img src={makanan1} alt="Makanan1" className="w-8/12" />
                <div className="grid place-items-center">
                  <h3>Roco Timun</h3>
                  <h4>+ Damage & + Health</h4>
                  <img onClick={handleTambah1}className="w-[50px] h-[50px] cursor-pointer"
                  src={buttonImage1} alt="Button2" />
                </div>
              </div>
              <div className="grid place-items-center text-white w-[380px] h-[430px] mx-8 rounded-[24px]"
              style={{backgroundImage: `url(${bgmakanan})`}}>
                <h3 className="mt-4">Jumlah yang dimiliki : {makananBangka2}</h3>
                <img src={makanan2} alt="Makanan2" className="w-8/12" />
                <div className="grid place-items-center">
                  <h3>Bolu Meranti</h3>
                  <h4>+ Health</h4>
                  <img onClick={handleTambah2}className="w-[50px] h-[50px] cursor-pointer"
                  src={buttonImage2} alt="Button2" />
                </div>
              </div>
              <div className="grid place-items-center text-white w-[380px] h-[430px] mx-8 rounded-[24px]"
              style={{backgroundImage: `url(${bgmakanan})`}}>
                <h3 className="mt-4">Jumlah yang dimiliki : {makananBangka3}</h3>
                <img src={makanan3} alt="Makanan3" className="w-8/12" />
                <div className= "grid place-items-center">
                  <h3>Soto Bangka</h3>
                  <h4>+ Damage</h4>
                  <img onClick={handleTambah3}className="w-[50px] h-[50px] cursor-pointer"
                  src={buttonImage3} alt="Button2" />
                </div>
              </div>
            </div>
            <button className="text-white ml-8 text-4xl mt-8" onClick={handleBangka}>Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restoran;
