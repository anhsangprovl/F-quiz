/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import "./home.css";

import { useSelector } from "react-redux";
import SliderComponent from "../Slider/SliderComponent";
import { FiCheckCircle } from "react-icons/fi";

import Box from "@material-ui/core/Box";

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
  };

  return (
    <main className="page">
      <div className="page page1">
        <div className="left">
          <h1>Play Online Quiz & Win Cask Daily!</h1>
          <p>Win up to $1100 monthly from Quizz.</p>
          <div className="btn">
            <input className="input-btn" placeholder="@Username"/>
            <button className="getstart-btn">Get Start</button>
            <div className="check-icon">
              <FiCheckCircle className="check check1" /> Easy to use
              <FiCheckCircle className="check check2"/> 100% Safe
            </div>
          </div>
        </div>
        <div className="right">
          <div className="image-group">
            <img src="https://images.unsplash.com/photo-1585432959449-b1c9c8cc49ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHx0ZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt=""/>
          </div>
        </div>
      </div>
      <div className="page page2">
        <h1>How does it work?</h1>
        <div className="section">
          <div className="section-item">
            <img src="https://kahoot.com/files/2022/10/Asset-3@2x-1.png" />
            <h3>Create or select a Quizz.</h3>
            <p>Make your own learning content in the Kahoot! Creator or choose from ready-to-play Quizz created by our Verified creators and content partners on our Discover page.</p>
          </div>
          <div className="section-item">
            <img src="https://kahoot.com/files/2022/10/Asset-5@2x-1.png" />
            <h3>Host and play</h3>
            <p>Invite students to join on any device, in-person, virtually, or in a hybrid learning environment, at kahoot.it or in the Kahoot! app through a simple QR code or game pin.</p>
          </div>
          <div className="section-item">
            <img src="https://kahoot.com/files/2022/10/Asset-1@2x-1.png" />
            <h3>Review</h3>
            <p>As soon as the kahoot is done, you’ll be able to view a full report of your students’ responses and even identify difficult questions to reinforce learning and knowledge retention!</p>
          </div>
        </div>
      </div>
      
      </main>
  );
}


export default Home;
