import React, { Component } from "react";
//import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {

  render() {
    const myStyle = {
      position: "absolute",
      top: "30%",
      left: "20%",
      right: "20%",
      transform: "translate(-50%, -50%)",
      textAlign: 'center',
      color: 'white',
    };

    if (!this.props.data) return null;
    const name = this.props.data.name;

    return (

      <header id="home">
        {/* <ParticlesBg type="circle" bg={true} />  */}

        {/* <img src="/images/banner-image.png" alt="banner" width="100%" className="bannerimage"/>  */}
        {/* <div class="bannerimage"></div>  */}
        <div class="col-sm-4">
          <img src="/images/talentw.png" alt="logo" width="200px" style={{ position: "absolute", top: "25px", left: "70px" }} />
        </div>
        <div class="col-sm-8">
          <nav id="nav-wrap" style={{ fontSize: "18px", marginTop: "32px", }}>

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#about">
                  About Us
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#resume">
                  Services
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#portfolio">
                  Our Clients
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1500}>
              <div style={myStyle}><h1>TalentwiseCA</h1><h2>Accomplishing corporate essentials the intelligent way!</h2>

              </div>
            </Fade>
            <hr />

          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
