import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="twelve columns main-col">
              <h2><center>About Us</center></h2>

              <div style={{textAlign:'justify', color:'#cdcdcd'}}><center>The TalentWise tale!</center>
                TalentWise had set out with an idea. The principal concept revolves around constructing a platform that would blend technology
                and trade immaculately. Since the IT field embodies endless transformations and innovations, we, too, continually persevere to
                discover methods to employ our aptitudes and technical expertise to help alleviate the intricacy of business institutions while
                simultaneously enhancing the business community and contributing to the general welfare. Our team's emphasis is not only on refining
                our approach and tools. It also strives to deliver the finest attainable assistance and fulfilling the client's aspirations in the best
                achievable style.<br></br>
                1. WHY US?
                TalentWise truly believes in what it does. We initiated with the goal of becoming an IT implementation enterprise globally renowned for the
                finest execution strategies in optimum time and to furnish resources and solutions in sync with the future circumstances of business growth.
                We have worked persistently to reach where we are and are delighted to express that we are on track to accomplish our goal. Amidst the dynamically
                changing business variables, TalentWise will continue working with you till the end to yield the desired outcomes that fulfil your precise business
                essentials. We provide data-driven tailored business insight service, big data and predictive analytics solutions and services along with Tech
                Consulting and many additional offerings to our esteemed clients. By determining our customer's requirements, we go beyond the path of technological
                implementation to furnish perfect solutions that will lead to the best outcomes. <br></br><br></br>
                2. Our Mission
                TalentWise thrives in the most challenging circumstances. Our mission primarily is to enrich our clients' ease of operating businesses by
                curating the finest implementation strategies. An auxiliary troubleshooting mechanism for cracking demanding crises and further aid streamlining
                them for our clients. TalentWise aims to advance amicable solutions, thus enabling all our clients to go the extra miles they forever desire.<br></br><br></br>
                3. Our Promise
                TalentWise believes in delivering results. It is more than solely keeping a promise for us. For us, it is like following our mantra!
                Since time immemorial, our team has been diligently executing its responsibilities, and we intend to carry this pattern of trust for decades
                to come. We will turn your vision into reality, and this TalentWise pledge will continue to be pursued eternally!
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
