import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useGlobalContext } from "../context";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceForm = () => {
  const [voiceOn, setVoiceOn] = useState(true);
  const { setProducts, products, displayAlert, postProducts, setLoading } =
    useGlobalContext();

  const commands = [
    {
      command: "*",
      callback: (food) => {
        addItemVoice(food);
      },
    },
  ];

  const { listening, browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands,
  });

  const handleVoice = () => {
    const alert = document.querySelector(".alert");
    alert.classList.add(`alert-info`);
    setVoiceOn(!voiceOn);
    if (voiceOn) {
      alert.textContent = "powiedz nazwę produktu";
      SpeechRecognition.startListening({ continuous: true });
    } else {
      alert.textContent = "nagrywanie zakończone";
      SpeechRecognition.stopListening();
      setTimeout(() => {
        alert.classList.remove(`alert-info`);
        alert.textContent = "";
      }, 1000);
    }
  };

  const addItemVoice = (food) => {
    setLoading(false);
    const id = new Date().getTime().toString().slice(3, -1);
    if (food) {
      const newProduct = {
        id: id,
        name: food,
      };
      setProducts([...products, newProduct]);
      postProducts(id, food);
      displayAlert("dodano do listy", "info");
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return;
  }

  return (
    <button
      type="button"
      className={listening ? "submit-btn2 submit-btn3 " : "submit-btn2"}
      onClick={handleVoice}
    >
      <FaMicrophone />
    </button>
  );
};

export default VoiceForm;
