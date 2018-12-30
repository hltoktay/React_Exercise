import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab:0 }; 
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid" >
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                            React Project #1
                  </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                   </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                            React Project #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                            React Project #3
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </div>
                    )
        } else if(this.state.activeTab === 1) {
            return(
                <div  className="projects-grid">
                      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                            HTML/CSS #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                            HTML/CSS #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }  else if(this.state.activeTab === 2) {
            return(
                <div  className="projects-grid">
                      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                            JavaScript #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>  <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                        JavaScript #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>  <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                        JavaScript #3
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>  <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png) center / cover' }} >
                        JavaScript #4
                        </CardTitle>
                        <CardText>
                            Lorem ipsum blab alsda primtins
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
               <Tab>React</Tab>
               <Tab>HTML/CSS</Tab>
               <Tab>JavaScript</Tab>
             </Tabs>

             
             <Grid>
               <Cell col={12}>
                 <div className="content">{ this.toggleCategories() }</div>
               </Cell>
             </Grid>
            </div>
        )
    }
}
 
export default Project;