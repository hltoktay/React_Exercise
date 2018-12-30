import React, { Component } from 'react';
import { Grid, Cell, Textfield, Footer, FooterSection, FooterLinkList, Button } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                <Cell col={6}>
                  <h2 class="contact-title">Get in touch with us</h2>
                        <Textfield
                            onChange={() => { }}
                            label="Your Name"
                            floatingLabel
                            style={{ width: '200px', color:'black', marginLeft:'90px', letterSpacing:'2px' }}
                        />

                        <Textfield
                            onChange={() => { }}
                            label="Your E-mail"
                            floatingLabel
                            style={{ width: '200px', margin:'40px 30px', boxShadow:'black', letterSpacing:'2px' }}
                        />

                        {/* Numeric Textfield with floating label */}
                        <Textfield
                            onChange={() => { }}
                            pattern="-?[0-9]*(\.[0-9]+)?"
                            error="Input is not a number!"
                            label="Phone Number..."
                            floatingLabel
                            style={{ width: '200px', margin:'40px 150px',}}
                        />

                      <Button style={{marginLeft:'180px', width:'180px', fontSize:'18px'}} ripple>
                       CLICK IT
                      </Button>
                    </Cell>

                    <Footer style={{ background: "white", width: " 300px", }}>
                        <FooterSection>
                            <FooterLinkList style={{height:'70px', paddingBottom:'50px', color:'black'}}>
                                <a class="icon" href="http://gmail.com" rel="noopener noreferrer" target="_blank">
                                    <i class="far fa-envelope"></i></a>
                            </FooterLinkList>

                            <FooterLinkList style={{height:'70px', paddingBottom:'50px', color:'black'}}>
                                <a class="icon" href="http://skype.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-skype"></i></a>
                            </FooterLinkList>

                            <FooterLinkList style={{height:'70px', color:'black'}}>
                                <a class="icon" href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-linkedin-in"></i></a>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Grid>

   
            </div>
        )
    }
}
 
export default Contact;