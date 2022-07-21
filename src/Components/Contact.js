import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from '@emailjs/browser';

const initialState = {
  nameError: "",
  emailError: "",
};

class Contact extends Component {
  state = initialState;
  render() {

    const sendEmail = (e) => {
      e.preventDefault();

      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        alert("Form submitted successfully!")
        emailjs.sendForm('gmail', 'templateid', e.target, '_PeCypRnDCmv1PmXP')
        .then((result) => {
          console.log(result.text);
          // clear form
          this.setState(initialState);
          e.target.reset();
        }, (error) => {
          console.log(error.text);
        });
      }
      //e.target.reset(); // clears the form
      //this.setState(initialState);
    };

    this.validate = () => {
      let nameError = "";
      let emailError = "";
  
      if (!this.state.user_name) {
        nameError = "Name field is mandatory";
        this.setState({nameError });
        return false;
      } 
      if (!this.state.user_email) {
        emailError = "Email field is mandatory";
        this.setState({emailError });
        return false;
      }
      return true;
    };

    this.handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(event.target.name)
    }

    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    //const message = this.props.data.contactmessage;

    return (
      <section id="contact" style={{backgroundColor:"rgb(43, 127, 139)",boxShadow: "5px 10px"}}>
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span></span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead" style={{color:"white", fontSize:"20px", marginTop:"30px", fontWeight:"bold"}}>Contact Us</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={sendEmail}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required" style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      maxLength={25}
                      id="contactName"
                      name="user_name"
                      onChange={this.handleChange}
                      value={this.state.namevalue}
                      style={{ background: "white" ,color: "#000000"}}
                    />
                  </div>
                  <div style={{ fontSize: 12, color: "rgb(171 46 46)" }}>
                    {this.state.nameError}</div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required" style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="user_email"
                      style={{ background: "white" ,color: "#000000"}}
                      onChange={this.handleChange}
                      value={this.state.emailvalue}
                    />
                  </div>
                  <div style={{ fontSize: 12, color: "rgb(171 46 46)" }}>
                    {this.state.emailError}</div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message
                    </label>
                    <textarea
                      cols="50"
                      rows="6"
                      id="contactMessage"
                      name="message"
                      maxLength={30}
                      style={{ background: "white",color: "#000000" }}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" style={{backgroundColor:"#333"}}>Submit</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address" style={{color:"rgb(219 210 210)"}}>
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
