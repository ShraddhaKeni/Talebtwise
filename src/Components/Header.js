import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;
    const name = this.props.data.name;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
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

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <div style={{ textAlign: 'center', color: 'white' }}>Accomplishing corporate essentials the intelligent way!
                <br></br>
                TalentWise is a full-service executive implementation firm that furnishes clients
                with an extraordinary facility for execution. In today’s competitive circumstances,
                the success of any business pivots on technology coupled with upwardly mobile and
                professional handling of critical tasks. Since IT infrastructure transforms continually,
                accessing the latest implementation methodology becomes even more crucial. We are committed
                to constructing relationships with our clients to best meet their needs and equip them with
                exceptional services. We offer creative, customized implementation services with stable,
                secure professionals experienced in the most delinquent technologies.
                <br></br><br></br>
                At TalentWise, we intend to best synchronize our outlook with that of our clients.
                Our strategies are instituted in real-time after immersing ourselves in our client’s culture while
                getting oriented with the management style, organizational goals and history. We present a proactive
                strategy for all IT implementation needs associated with persistent monitoring, interpretation,
                and enhancement of the requirements before it gets into your core apparatus. By establishing suitable
                mechanisms, we enable our clients to notice some fundamental reasons for prevalent execution problems.
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
