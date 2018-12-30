import React, { Component } from 'react';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content} from 'react-mdl';

import Main from './components/main';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" waterfall hideTop>
              <HeaderRow title="My Portfolio Page">
                  <Textfield
                      value=""
                      onChange={() => {}}
                      label="Search3"
                      expandable
                      expandableIcon="search"
                  />
              </HeaderRow>
          </Header>
          <Drawer title="MENU">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/project">Project</Link>
                  <Link to="/aboutus">About Me</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
  </div>
  
  
    );
  }
}

export default App;
