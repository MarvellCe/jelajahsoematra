import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import makanan1 from "./gambar/makananBangka1.png";
import makanan2 from "./gambar/makananBangka2.png";
import makanan3 from "./gambar/makananBangka3.png";
import arenaCloud from "../../../gambar/arena.png";
import arenaRainy from "../../../gambar/rainy.gif";
import arenaThunder from "../../../gambar/thunder.gif";
import arenaSunny from "../../../gambar/sunny.png";
import musuh1 from "./gambar/musuh.png";
import character1 from "./gambar/character1.png";
import bambu from "./gambar/bambu.png";
import peluru from "./gambar/peluru.png";
import Modal from "../../Modal";
import ModalButton from "../../ModalButton";
import nextt from "../../../gambar/nextt.png";
import backk from "../../../gambar/backk.png";
import museum1 from "../../../gambar/bangka1.png";
import museum2 from "../../../gambar/bangka2.png";
import tembakmusuh from "../../../audio/hitMusuh.mp3";
import tembakchar from "../../../audio/hitKita.mp3";
import bgmMenang from "../../../audio/bsMenang.mp3";
import bgmKalah from "../../../audio/bsKalah.mp3";
import bgmBattle from "../../../audio/bsBattle.mp3";
import bgmMuseum from "../../../audio/bsMuseum.mp3";
import bgmHeal from "../../../audio/bsHeal.mp3";

const Museum = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, weather, weatherId } = location.state || {};
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);
  const [healthMusuh, setMusuh] = useState(250);
  const [makananBangka1, setMakanan1] = useState(location.state?.makananBangka1);
  const [makananBangka2, setMakanan2] = useState(location.state?.makananBangka2);
  const [makananBangka3, setMakanan3] = useState(location.state?.makananBangka3);
  const [damage, setDamage] = useState(10);
  const [animate, setAnimate] = useState(false);
  const [animate1, setAnimate1] = useState(false);
  const [buff, setBuff] = useState(10);
  const [rainy, setRainy] = useState(false);
  const [sunny, setSunny] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [skill, setSkill] = useState(false);
  const [page, setPage] = useState(false);
  const [arena, setArena] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModalButton, setShowModalButton] = useState(false);
  const [modalMessageButton, setModalMessageButton] = useState("");
  const [museumMap, setMuseumMap] = useState([museum1, museum2]);
  const [currentMap, setCurrentMap] = useState(0);
  const [next, setNext] = useState(false);

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const displayModalButton = (message) => {
    setModalMessageButton(message);
    setShowModalButton(true);
  };

  const handleBuff = () => {
    if (weatherId > 199 && weatherId < 623) {
      setRainy(true);
    } else if (weatherId === 800) {
      setSunny(true);
    } else if (weatherId > 700 && weatherId < 805) {
      if (weatherId < 800) {
        setCloud(true);
      }
      if (weatherId > 800 && weatherId < 805) {
        setCloud(true);
      }
    } else {
      alert("error");
    }
  };

  const handleArena = () => {
    if (weatherId > 199 && weatherId < 233) {
      setArena(arenaThunder);
    } else if (weatherId > 299 && weatherId < 623) {
      setArena(arenaRainy);
    } else if (weatherId === 800) {
      setArena(arenaSunny);
    } else if (weatherId > 700 && weatherId < 805) {
      if (weatherId < 800) {
        setArena(arenaCloud);
      }
      if (weatherId > 800 && weatherId < 805) {
        setArena(arenaCloud);
      }
    } else {
      alert("error");
    }
  };

  const handleTambah1 = () => {
    if (makananBangka1 < 1) {
      displayModal("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (sunny === true) {
        setMakanan1(makananBangka1 - 1);
        setDamage(buff + 10);
        if (health > 184 && health < 186){
          setHealth(health + buff + 5);
          handleAnimateDarah15();
        }else if (health > 189 && health < 191) {
          setHealth(health + buff);
          handleAnimateDarahNormal();      
        } else if (health > 194 && health < 196){
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 199) {
          setHealth(health);
        } else {
          setHealth(health + buff + 10);
          handleAnimateDarahBuff();
        }
        setSkill(true);
      } else if (cloud === true) {
        setMakanan1(makananBangka1 - 1);
        setDamage(buff - 5);
        if (health > 199) {
          setHealth(health);
        } else {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        }
        setSkill(true);
      } else if (rainy === true) {
        setMakanan1(makananBangka1 - 1);
        setDamage(buff);
        if (health > 194 && health < 196) {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 199) {
          setHealth(health);
        }else {
          setHealth(health + buff);
          handleAnimateDarahNormal();
        }
        setSkill(true);
      }
    }
  };

  const handleTambah2 = () => {
    if (makananBangka2 < 1) {
      displayModal("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (cloud === true) {
        setMakanan2(makananBangka2 - 1);
        if (health > 184 && health < 186){
          setHealth(health + buff + 5);
          handleAnimateDarah15();
        }else if (health > 189 && health < 191) {
          setHealth(health + buff);
          handleAnimateDarahNormal();      
        } else if (health > 194 && health < 196){
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 199) {
          setHealth(health);
        } else {
          setHealth(health + buff + 10);
          handleAnimateDarahBuff();
        }
        setSkill(true);
      } else if (rainy === true) {
        setMakanan2(makananBangka2 - 1);
        if (health > 199) {
          setHealth(health);
        } else {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        }
        setSkill(true);
      } else if (sunny === true) {
        setMakanan2(makananBangka2 - 1);
        if (health > 194 && health < 196) {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 199) {
          setHealth(health);
        }else {
          setHealth(health + buff);
          handleAnimateDarahNormal();
        }
        setSkill(true);
      }
    }
  };

  const handleTambah3 = () => {
    if (makananBangka3 < 1) {
      displayModal("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (rainy === true) {
        setMakanan3(makananBangka3 - 1);
        setDamage(buff + 10);
        setSkill(true);
      } else if (sunny === true) {
        setMakanan3(makananBangka3 - 1);
        setDamage(buff - 5);
        setSkill(true);
      } else if (cloud === true) {
        setMakanan3(makananBangka3 - 1);
        setDamage(buff);
        setSkill(true);
      }
    }
  };

  const handleKurang = () => {
    handleAnimate();
    if (skill === true) {
      setMusuh(healthMusuh - damage);
      setHealth(health - 10);
      setSkill(false);
    } else if (skill === false) {
      setMusuh(healthMusuh - 10);
      setHealth(health - 10);
      setSkill(false);
    }
    handleAttackMusuh();
    handleMenang();
  };

  const handleKalah = () => {
    navigate("/character", {
      state: {
        name: name,
      },
    });
  };

  const handleMenang = () => {
    if (healthMusuh <= 10) {
      let totalMoney = money;
      let count1 = makananBangka1;
      let count2 = makananBangka2;
      let count3 = makananBangka3;

      if (makananBangka1 > 0) {
        while (count1 > 0) {
          setMakanan1(makananBangka1 - 1);
          count1 -= 1;
          totalMoney += 10;
        }
      }

      if (makananBangka2 > 0) {
        while (count2 > 0) {
          setMakanan2(makananBangka2 - 1);
          count2 -= 1;
          totalMoney += 10;
        }
      }

      if (makananBangka3 > 0) {
        while (count3 > 0) {
          setMakanan3(makananBangka3 - 1);
          count3 -= 1;
          totalMoney += 10;
        }
      }
      setMoney(totalMoney);
      displayModalButton("MENANG BOS");
      let charmusuh = document.getElementById("charmusuh");
        charmusuh.classList.add("animate-[ping_2.5s_ease-in-out_infinite]");
      if (music) {
         audioRefMenang.current.play();
         audioRefBattle.current.pause();
      }
      setTimeout(() => {
        navigate("/aboutus", {
          state: {
            name: name,
            character: character,
            health: health,
            money: totalMoney,
          },
        });
      }, 2000);
    } else if (health <= 10) {
      setTimeout(() => {
        displayModalButton("KALAH BOS");
        if (music) {
          audioRefKalah.current.play();
          audioRefBattle.current.pause();
       }
      }, 500);
      
      setTimeout(() => {
        handleKalah();
      }, 3000);

    }
  };

  const handlePage = () => {
    setPage(true);
    handleBGMBattle();
  };

  const handleNext = () => {
    setCurrentMap(currentMap + 1);
    setNext(true);
  };

  const handleBack = () => {
    setCurrentMap(currentMap - 1);
    setNext(false);
  };

  const handleAnimateDarahBuff = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 20;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 2.52) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  
  };

  const handleAnimateDarahNormal = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 10;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 2.52) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  };

  const handleAnimateDarahNerf = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 5;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 2.52) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  };

  const handleAnimateDarah15 = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 15;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 2.52) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  };

  const handleAttackMusuh = () => {
    let bambu2 = document.getElementById("bambu2");
    let darah = document.getElementById("darah");
    let darahmusuh = document.getElementById("darahmusuh");
    let charkita = document.getElementById("charkita");
    let charmusuh = document.getElementById("charmusuh");
    
    let healthMusuhh = healthMusuh - 10;
    setTimeout(() => {
      if (music) {
        audioRefMusuh.current.play();
      }
      charmusuh.classList.add("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
      darahmusuh.style.width = `${(healthMusuhh * 1.13104) / 1.3}px`;
    }, 500)

    setTimeout(() => {
    setAnimate1(true);
    charmusuh.classList.remove("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
    bambu2.classList.add("-translate-x-full");
    }, 1000)

    let healthh = health - 10;
    setTimeout(() => {
      audioRefChar.current.play();
      charkita.classList.add("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
    darah.style.width = `${(healthh * 2.52) / 2}px`;
    }, 1500)

    setTimeout(() => {
      setAnimate1(false);
      charkita.classList.remove("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
    }, 2000)
  };

  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 700);
  };

  useEffect(() => {
    handleArena();
    handleBGMMuseum();
  }, []);

  const handleBGMBattle = () => {
    if (music) {
      audioRefBattle.current.play();
      audioRefMuseum.current.pause();
   }
  };

  const handleBGMMuseum = () => {
    if (music) {
      audioRefMuseum.current.play();
   }
  }

  const [music, setMusic] = useState(true);
  const audioRefChar = useRef(null);
  const audioRefMusuh = useRef(null);
  const audioRefMenang = useRef(null);
  const audioRefKalah = useRef(null);
  const audioRefBattle = useRef(null);
  const audioRefMuseum = useRef(null);
  const audioRefHeal = useRef(null);

  return (
    <div className="font-custom">
      <audio ref={audioRefMusuh}
       src={tembakmusuh} 
      />
      <audio ref={audioRefChar}
      src={tembakchar}
      />
      <audio ref={audioRefKalah}
       src={bgmKalah} 
      />
      <audio ref={audioRefMenang}
      src={bgmMenang}
      />
      <audio ref={audioRefBattle}
       src={bgmBattle}
      />
      <audio ref={audioRefMuseum}
       src={bgmMuseum}
      />
      <audio ref={audioRefHeal}
      src={bgmHeal}
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      <ModalButton
        isOpen={showModalButton}
        onClose={() => setShowModalButton(false)}
        message={modalMessageButton}
      />
      {page ? (
        <div className="w-full h-screen overflow-hidden">
          <div
            className="min-h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${arena})` }}
          >
            <div className="relative">
              <div className="flex justify-between mx-8 pt-36">
                <div className="bg-green-100 w-1/4 text-center p-3 text-xl">
                  <h1>{name}</h1>
                  <h2>HEALTH : {health}/200</h2>
                  <div
                  id="darah"
                    className="bg-green-500 h-8 ml-[25px] transition-width duration-700"
                    style={{width: `252px`}}
                  ></div>
                  <button
                    onClick={handleKurang}
                    className="hover:bg-red-300 w-full active:ring active:bg-red-400"
                  >
                    MIAW
                  </button>
                </div>
                <div className="bg-green-100 w-1/4 text-center p-3 text-xl">
                  <h1>musuh</h1>
                  <h2>HEALTH : {healthMusuh}/250</h2>
                  <div
                  id="darahmusuh"
                    className="bg-green-500 h-8 ml-[25px] transition-width duration-700"
                    style={{ width: `252px` }}
                  ></div>
                  <h2>PIW PIW</h2>
                </div>
              </div>

                <div className="flex justify-between relative mx-24 mt-16">
                  <img
                    src={character1}
                    id="charkita"
                    alt="Character"
                    className="w-[150px] h-full"
                  />
                  <img 
                  src={musuh1} 
                  alt="cat2" 
                  id="charmusuh"
                  className="w-[150px] ml-8 h-full"/>
                  <div className="w-full top-0 absolute flex flex-row ">
                    <img
                      src={bambu}
                      alt="bambu"
                      className={`transition-transform duration-700 ${
                        animate ? "transform translate-x-full w-6/12" : "opacity-0"
                      }`}
                    />
                    <img
                      src={peluru}
                      alt="peluru"
                      id="bambu2"
                      className={`transition-transform duration-700 ${
                        animate1 ? "transform w-6/12" : "opacity-0"
                      }`}
                    />
                  </div>
              </div>

              <div className="absolute grid grid-cols-3 text-center mx-96 place-items-center">
                <div className="w-5/12">
                  <h3>{makananBangka1}/10</h3>
                  <img src={makanan1} alt="Makanan1" 
                  onClick={handleTambah1}
                  className="w-12/12 mx-auto cursor-pointer hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"/>
                </div>
                <div className="w-5/12">
                  <h3>{makananBangka2}/10</h3>
                  <img src={makanan2} alt="Makanan2" 
                  onClick={handleTambah2}
                  className="w-12/12 mx-auto cursor-pointer hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"/>
                </div>
                <div className="w-5/12">
                  <h3>{makananBangka3}/10</h3>
                  <img src={makanan3} alt="Makanan3"
                  onClick={handleTambah3} 
                  className="w-12/12 mx-auto cursor-pointer hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute w-full h-screen overflow-hidden">
          <div
            className="absolute h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${museumMap[currentMap]})` }}
          >
            <div className="relative">
              {next ? (
                <div className="place-items-center grid grid-cols-6 mt-[540px] mr-[28px]">
                <img src={backk} alt="back" onClick={handleBack} className="col-start-3 cursor-pointer w-20"/>
                <div className="grid place-items-center"> 
                <button onClick={handlePage} className="tanya text-4xl animate-bounce">???</button>
                </div>
                </div>
              ) : (
                <div className="place-items-center grid grid-cols-6 mt-[540px] mr-[28px]">
                  <img src={nextt} alt="next" onClick={handleNext} className="col-start-4 cursor-pointer w-20" />
                  </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Museum;
