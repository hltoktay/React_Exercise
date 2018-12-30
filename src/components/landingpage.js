import React, { Component } from 'react'
import { Grid, Cell, Card } from 'react-mdl';   

class Landing extends Component {
    render() {
        return <div style={{ width: "100%", margin: "auto" }}>
            <Grid className="landing-grid">
            <Cell col={4}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />
              </Cell>
              <Cell col={6}>

            <div className="banner-text">
              <h3>Front End Web Developer</h3>
              <p>07756167099 <br/>
              hltoktay@gmail.com</p>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React  | NodeJS | MongoDB</p>
          </div>
        </Cell>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a href="http://github.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-github"></i>
          </a>

          {/* Freecodecamp */}
          <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-instagram"></i>
          </a>

          {/* Youtube */}
          <a href="http://mediu .com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-medium-m"></i>
          </a>
        </div>    
            </Grid>
          </div>;
    }
}
 
export default Landing;