import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import charCowok from "../gambar/cowok.png";
import charCowok2 from "../gambar/cowok2.png";
import charCewek from "../gambar/cewek.png";
import charCewek2 from "../gambar/cewek2.png";
import genderCowok from "../gambar/gendercowo.png";
import genderCewek from "../gambar/gendercewe.png";
import background from "../gambar/backgroundchar.png";
import ModalButton from "./ModalButton";
import audioBGM from "../audio/bsChar.mp3";

const Character = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state || {};
  const [gender, setGender] = useState([genderCowok, genderCewek]);
  const [cowok, setCowok] = useState([charCowok, charCowok2]);
  const [cewek, setCewek] = useState([charCewek, charCewek2]);
  const [character, setCharacter] = useState([]);
  const [health, setHealth] = useState(100);
  const [money, setMoney] = useState(100);
  const [makananAceh1, setMakanan1] = useState(0);
  const [makananAceh2, setMakanan2] = useState(0);
  const [makananAceh3, setMakanan3] = useState(0);
  const [choose, setChoose] = useState(true);
  const [chooseGender, setChooseGender] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [music, setMusic] = useState(true);
  const audioRefBGM = useRef(null);


  useEffect(() => {
    if(music) {
    audioRefBGM.current.play();
    }
  }, []);

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleSubmitCowok = () => {
    displayModal("Anda mendapatkan uang sejumlah 100 untuk diperjalanan anda !!!");
    setCharacter(cowok[0]);
    setTimeout(() => {
      navigate("/mapaceh", {
        state: {
          name: name,
          character: cowok[0],
          health: health,
          money: money,
          makananAceh1: makananAceh1,
          makananAceh2: makananAceh2,
          makananAceh3: makananAceh3,
        },
      });
    }, 1500);
  };

  const handleSubmitCowok1 = () => {
    displayModal("Anda mendapatkan uang sejumlah 100 untuk diperjalanan anda !!!");
    setCharacter(cowok[1]);
    setTimeout(() => {
      navigate("/mapaceh", {
        state: {
          name: name,
          character: cowok[1],
          health: health,
          money: money,
          makananAceh1: makananAceh1,
          makananAceh2: makananAceh2,
          makananAceh3: makananAceh3,
        },
      });
    }, 1500);
  };

  const handleSubmitCewek = () => {
    displayModal("Anda mendapatkan uang sejumlah 100 untuk diperjalanan anda !!!");
    setCharacter(cewek[0]);
    setTimeout(() => {
      navigate("/mapaceh", {
        state: {
          name: name,
          character: cewek[0],
          health: health,
          money: money,
          makananAceh1: makananAceh1,
          makananAceh2: makananAceh2,
          makananAceh3: makananAceh3,
        },
      });
    }, 1500);
  };

  const handleSubmitCewek1 = () => {
    displayModal("Anda mendapatkan uang sejumlah 100 untuk diperjalanan anda !!!");
    setCharacter(cewek[1]);
    setTimeout(() => {
      navigate("/mapaceh", {
        state: {
          name: name,
          character: cewek[1],
          health: health,
          money: money,
          makananAceh1: makananAceh1,
          makananAceh2: makananAceh2,
          makananAceh3: makananAceh3,
        },
      });
    }, 1500);
  };

  const handleChooseCowok = () => {
    setChoose(false);
    setChooseGender(true);
  };

  const handleChooseCewek = () => {
    setChoose(false);
    setChooseGender(false);
  };

  return (
    <div className="fixed w-full h-screen max-sm:grid max-sm:place-items-center font-custom">
      <img 
      src={background}
      alt="background"
      className="fixed w-full h-screen max-sm:max-w-full max-sm:h-auto" />
    <div className="fixed max-sm:">
    <audio ref={audioRefBGM}
       src={audioBGM} 
      />
    <ModalButton
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      {choose ? (
        <div >
            <div className="flex justify-between mx-72 mt-48 max-sm:flex max-sm:justify-between max-sm:mx-24 max-sm:mb-36">
              <img
                src={gender[0]}
                alt={"Gender $0"}
                className="gender-1 w-2/5 animate-[bounce_2s_ease-in-out_infinite] hover:drop-shadow-[0_0_50px_rgba(0,0,0,0.7)]"
                onClick={handleChooseCowok}
              />
              <img
                src={gender[1]}
                alt={"Gender $1"}
                className="gender-1 w-2/5 animate-[bounce_2s_ease-in-out_infinite] hover:drop-shadow-[0_0_50px_rgba(0,0,0,0.7)]"
                onClick={handleChooseCewek}
              />
            </div>
        </div>
      ) : (
        <div>
          {chooseGender ? (
            <div className="grid place-items-center h-screen">
              <div className="flex justify-between mx-80 mb-20 max-sm:flex max-sm:justify-between max-sm:mx-28 max-sm:mb-6">
                <img
                  src={cowok[0]}
                  alt={"Cowok $0"}
                  className="gender-1 w-4/12 animate-pulse hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]"
                  onClick={handleSubmitCowok}

                />
                <img
                  src={cowok[1]}
                  alt={"Cowok $1"}
                  className="gender-1 w-4/12 animate-pulse hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]"
                  onClick={handleSubmitCowok1}
                />
              </div>
            </div>
          ) : (
            <div className="grid place-items-center h-screen">
              <div className="flex justify-between mx-80 mb-20 max-sm:flex max-sm:justify-between max-sm:mx-28 max-sm:mb-6">
                <img
                  src={cewek[0]}
                  alt={"Cewek $0"}
                  className="gender-1 w-4/12 animate-pulse hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]"
                  onClick={handleSubmitCewek}
                />
                <img
                  src={cewek[1]}
                  alt={"Cewek ${1"}
                  className="gender-1 w-4/12 animate-pulse hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]"
                  onClick={handleSubmitCewek1}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Character;
