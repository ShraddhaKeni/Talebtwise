import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  // getRandomColor() {
  //   let letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  render() {
    if (!this.props.data) return null;

    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //     </div>
    //   );
    // });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row">
            <div className="two column">
              <h1>
                <span>Services</span>
              </h1>
            </div>

            <div className="ten columns main-col" style={{textAlign:"justify"}}>
             
                At TalentWise, services for client objectives fulfilment is all that matters. Presently, TalentWise offers the following range of services:
                  <br></br> 
                  1. Technology Consulting  <br></br> 

                  We use a techno-analytics-guided principle to engineer cutting-edge solutions that allow our clients to manage large-scale business operations effortlessly and maintain consistent performance.

                  From handling mind-boggling information magnitudes to supervising an increasing number of customers and employees or making your institution thoroughly digital, all shall seem seamless with TalentWise as your partner in execution.

                  Our professionals are vigorously involved in scripting the future of tech-driven implementation, being well ahead of all other players in the industry. TalentWise excels in software product development, digital transformation partnership and system modernization to amplify your business growth.

                  Our select tailor-made solutions for our clients strengthen readiness for persistent association between stakeholders, enhance decision-making, and augment productivity while concurrently improving product effectiveness.
                  <br></br> <br></br>
                  2. Big Data Solutions  <br></br> 

                  Establishments might have neglected the prospects of Big Data earlier. However, today, there is possibly no denial that data is the new-age oil. Firms were caught off-guard and found themselves gazing at massive entanglements of data as its importance skyrocketed. The secret to achieving a competitive edge over others is untangling these data-loaded stacks and labyrinths.

                  Data Professionals are perhaps the only ones qualified to grasp the hidden insights that too in a wise, sincere and quick way. Challenges are immense, with cold, warm, and hot data requiring distinct techniques to extract the soundest quality out of Big Data.

                  TalentWise brings to the table a richly diversified consulting experience along with a slew of custom-made keys, thus allowing firms to comfortably tap the essences of Big Data with enthusiasm and clarity. We help you extract, analyze and interpret to best suit your business interests. We deliver a data breakdown that inspires positive moves on ground zero.
                  <br></br> <br></br>
                  3. Cloud Computing Consulting  <br></br> 

                  Cloud-based solutions equip your enterprise with limitless scope of scalability coupled with expedient efficacy of resources and thus help you reach levels of ultimate efficiency. Experts at TalentWise assist your company in building its own cloud tech while teaching you to handle and employ it. Our specialists aid you in availing the whole spectrum of cloud-enabled business advantages and further ensure that you can extract the full potential of this tech while ticking all the specified benchmarks.

                  We at TalentWise consistently pursue the maximum optimization of any technology under implementation and thus function similarly with Cloud Computing. We persistently operate to ensure the conversion of all on-paper benefits into on-ground realities like enterprise mobility, reducing costs, streamlining processes and therefore improving overall productivity.

                  Through reusable infrastructure profiles, our team swiftly deploys infrastructure in the cloud and therefore assists in ensuring a prosperous application functioning. We can also help habilitate your existing infrastructure to your preferred cloud service.

                  The adaption of cloud computing will instantly enhance your ease of doing business by unlocking a string of benefits ranging from dynamic scalability, cost-saving, performance quality, and constant availability to usability, enhanced collaboration, and security, amongst many more. We desire to be the catalyst for your innovation and expansion, and, thus, we structure regulatory mechanisms to inspect the rendition of your operational cloud environment.
                  <br></br> <br></br>
                  4. IT Staffing linked Augmentation Solution  <br></br> 

                  One of the most prominent challenges in the IT industry is locating the appropriate aptitude at the suited outlay, all at the correct time. It can evolve into a massively time-consuming and far too expensive affair. By employing IT staff augmentation services, you can seamlessly alter your team depending on the project requirements.

                  Staff Augmentation is an exemplary system to orchestrate distinctly qualified and technoscientific employees operating for you at tangible savings. It can support you in selecting an individual or team of dedicated additional specialists. Implementing this process can deliver enhanced productivity in your industrial projects.

                  At TalentWise, your needs are our priorities. Be it for an ongoing project or an upcoming one, we can furnish requisite skilful professionals depending on your needs. 
                  </div>
              </div>
           
        </Slide>
      </section>
    );
  }
}

export default Resume;
