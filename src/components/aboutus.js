import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';

import Education from "./education";
import Experience from './experience';
import Skills from './skills';

class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                      <div style={{textAlign: 'center'}}>
                        <img 
                           alt="avatar"
                           src="https://www.xing.com/assets/frontend_minified/img/users/nobody_m.1024x1024.jpg"
                           style={{ height:'200px'}}
                           />
                        </div>

                        <h2 style={{ paddingTop: '0.5em' }}>John Doe</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
                        <hr style={{ borderTop: '3px solid #41487e', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. y of type and scrambled it to macenturies</p>
                        <hr style={{ borderTop: '3px solid #41487e', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Hackney Central, N16 7TN, LONDON</p>
                        <h5>Phone</h5>
                        <p>+44 7756 167099</p>
                        <h5>Email</h5>
                        <p>john.doe@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #41487e', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2011}
                            endYear={2015}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Education
                            startYear={2017}
                            endYear={2018}
                            schoolName="Course or Programme"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{ borderTop: '3px solid #717cd0' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{ borderTop: '3px solid #717cd0' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={50}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={40}
                        />
                        <Skills
                            skill="React"
                            progress={75}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
 
export default About;