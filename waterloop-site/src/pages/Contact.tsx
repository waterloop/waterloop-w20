import React from "react";
import GoogleMapReact from "google-map-react";
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General";
import { MAP } from "../config/map";
import "../theme/styles.scss";

const Contact: React.FC = () => (
  <div>
    <Hero
      title="CONTACT"
      description="We'd love to get in touch!"
      anchor="#contact-form"
    ></Hero>
    <div id={"#contact-form"}></div>
    <div className="pageContainer">
      <div className="contactFormContainer">
        <ContactForm
          title="Send Us a Message"
          desc="Want to get in touch? Submit this form or drop us a message at contact@waterloop.ca"
        ></ContactForm>
        <div className="locationContainer">
          <h3>Visit Us</h3>
          <p>
            Our workbay is located in the Sedra Student Design Centre, in
            Engineering 5 at the University of Waterloo. Come visit us and
            we’ll be happy to show you around!
          </p>
          <div className="mapContainer">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: MAP,
              }}
              defaultCenter={{ lat: 43.4723, lng: -80.5449 }}
              defaultZoom={17}
            ></GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default Contact;
