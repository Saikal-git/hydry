import React from "react";
import line from "../../assets/img/shape.png";
import aboutImg from "../../assets/img/aboutImg.png";
import group1 from "../../assets/img/Mask group (1).png";
import group2 from "../../assets/img/Mask group (2).png";
import group3 from "../../assets/img/Mask group (3).png";
import group4 from "../../assets/img/Mask group (4).png";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <div className="">
            <div className="one">
              <div className="">
                <h1>INTRODUCTION</h1>
                <div className="about-line">
                  <h6>TO HYDRA VR </h6>
                  <img src={line} alt="" />
                </div>
              </div>
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
            <div className="two">
              <img src={aboutImg} alt="" />
              <div className="">
                <h1>ABOUT</h1>
                <h2>HYDRA VR</h2>
                <p>
                  Eget mi proin sed libero enim sed faucibus turpis. Nisl
                  rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
                  augue eget arcu dictum. Ultrices gravida dictum fusce ut
                  placerat orci. Aenean et tortor at risus viverra adipiscing at
                  in. Mattis aliquam faucibus purus in massa. Est placerat in
                  egestas erat imperdiet sed. Consequat semper viverra nam
                  libero justo laoreet sit amet. Aliquam etiam erat velit
                  scelerisque in dictum non consectetur a. Laoreet sit amet
                  cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
                  Sem nulla pha retra diam sit amet nisl suscipit adipiscing
                  bibendum. Leo a diam sollicitudi n tempor.
                </p>
                <button>LET’S GET IN TOUCH</button>
              </div>
            </div>
            <div className="one">
              <div className="">
                <h1>WHY BUILD</h1>
                <div className="about-line">
                  <h6>WITH HYDRA? </h6>
                  <img src={line} alt="" />
                </div>
              </div>
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
          </div>
          <div className="blocks">
            <div className="block">
              <img src={group1} alt="" />
              <h1>SIMULATION</h1>
              <div className="line"></div>
              <p className="par">
                Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                porttitor rhoncus libero justo laoreet sit amet vitae.
              </p>
              <button>TRY IT NOW</button>
            </div>
            <div className="block">
              <img src={group2} alt="" />
              <h1>EDUCATION</h1>
              <div className="line"></div>
              <p className="par">
                Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                porttitor rhoncus libero justo laoreet sit amet vitae.
              </p>
              <button>TRY IT NOW</button>
            </div>
            <div className="block">
              <img src={group3} alt="" />
              <h1>SELF-CARE</h1>
              <div className="line"></div>
              <p className="par">
                Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                porttitor rhoncus libero justo laoreet sit amet vitae.
              </p>
              <button>TRY IT NOW</button>
            </div>
            <div className="block">
              <img src={group4} alt="" />
              <h1>OUTDOOR</h1>
              <div className="line"></div>
              <p className="par">
                Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                porttitor rhoncus libero justo laoreet sit amet vitae.
              </p>
              <button>TRY IT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
