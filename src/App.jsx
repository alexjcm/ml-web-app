import React from 'react'
import './App.css'
import logo from './assets/cancer.svg'
import a from './assets/A.png'
import b from './assets/B.jpg'
import c from './assets/C.jpg'
import unl from './assets/unl.png'
import FormUpload from './components/FormUpload/FormUpload.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogleDrive,
  faTwitter,
  faKaggle,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="container">
      <h1><strong>IMAGE CLASSIFICATION ONCOLOGY</strong></h1>
      <img src={logo} alt="Logo" id="logo" />
      <FormUpload />
      <br></br>
      <footer className="footer">
        <div className="social-container">
          <center>
            <h3>Colaboradores</h3>
            <table>
              <tr>
                <th>
                  <img src={c} className="photo" />
                </th>
                <th>
                  <img src={a} className="photo" />
                </th>
                <th>
                  <img src={b} className="photo" />
                </th>
              </tr>
              <tr>
                <th>
                  <a href="https://twitter.com/lachamba" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/lachamba" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </th>
                <th>
                  <a href="https://twitter.com/alexjhcm" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/alex-chamba-macas-5bbba31b0" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </th>
                <th>
                  <a href="https://twitter.com/AnthonyOrtegaDM" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/anthony-ortega-b1aa861b5" className="linkedin social" >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </th>
              </tr>
            </table>
            <h3>Repositorios</h3>
            <a href="https://www.kaggle.com/fanconic/skin-cancer-malignant-vs-benign" className="twitter social">
              <FontAwesomeIcon icon={faKaggle} size="2x" />
            </a>
            <a href="https://github.com/AlexJCM/ml-web-app" className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://teachablemachine.withgoogle.com/models/NdZabxWTh/" className="youtube social">
              <FontAwesomeIcon icon={faGoogleDrive} size="2x" />
            </a>
          </center>
        </div>
      </footer>
    </div>
  )
}
export default App