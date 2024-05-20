import React from "react";
import line from "../../assets/img/homeLine.png";
import homeImg from "../../assets/img/homeImg.png";
import geo from "../../assets/img/geo.png";
import call from "../../assets/img/call.png";
import message from "../../assets/img/message.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="homeTop">
            <div className="text">
              <h1>
                <span>Dive</span> Into The Depths Of{" "}
                <span>Virtual Reality</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore nisl tincidunt
                eget. Lectus mauris eros in vitae .
              </p>
              <div className="lineBtn">
                <button>BUILD YOUR WORLD</button>
                <img src={line} alt="" />
              </div>
            </div>
            <img src={homeImg} alt="" />
          </div>
          <div className="homeBottom">
            <div className="info">
              <div className="infoOne">
                <img src={geo} alt="" />
                <div className="infoOne-text">
                  <h1>Pay Us a Visit</h1>
                  <p>Union St, Seattle, WA 98101, United States</p>
                </div>
              </div>
              <div className="line1"></div>
              <div className="infoOne">
                <img src={call} alt="" />
                <div className="infoOne-text">
                  <h1>Give Us a Call</h1>
                  <p>(110) 1111-1010</p>
                </div>
              </div>
              <div className="line1"></div>
              <div className="infoOne">
                <img src={message} alt="" />
                <div className="infoOne-text">
                  <h1>Send Us a Message</h1>
                  <p>Contact@HydraVTech.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
