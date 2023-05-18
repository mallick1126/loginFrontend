import React from "react";
import "../stylesheets/contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-start align-items-centre">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91-8789200300</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-centre">
                <img
                  src="https://img.icons8.com/office/24/000000/email.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">
                    rahulmallick1126@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-centre">
                <img
                  src="https://img.icons8.com/office/24/000000/address.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">
                    Dhanbad, Jharkhand-826003
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Form */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch </div>
                <form id="contact_form">
                  <div className="contact_form_data d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your name"
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your email"
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your phone number"
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_filed contact_form_message"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
