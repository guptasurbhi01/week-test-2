// Footer.js
import React from "react";
import { IonIcon } from "@ionic/react";
import {
  hourglassOutline,
  locationSharp,
  personSharp,
  logoGithub,
  logoLinkedin,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";
import "./css/SideBar.css";



const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Personal Info</h2>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./assets/avatar.jpg" alt="Oktay Shakirov" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Oktay Shakirov">
            Oktay Shakirov
          </h1>

          <p className="title notranslate" id="motto">
            Hello, World !
          </p>
        </div>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={hourglassOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Age</p>
              <time id="age" className="counting-animation">
                29 years old
              </time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationSharp} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Berlin, Germany</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={personSharp} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Personality Type</p>
              <address>INTJ-T</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/oktayshakirov" className="social-link">
              <IonIcon icon={logoGithub} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/oktayshakirov"
              className="social-link"
            >
              <IonIcon icon={logoLinkedin} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/oktay.shakirov/"
              className="social-link"
            >
              <IonIcon icon={logoInstagram} />
            </a>
          </li>

          <li className="social-item">
            <a href="https://twitter.com/oktayshakirov" className="social-link">
              <IonIcon icon={logoTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
