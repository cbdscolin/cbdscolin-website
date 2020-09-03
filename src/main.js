import React from "react";
import {Header} from "./header.js";
import { HashRouter, Route } from "react-router-dom";
import {About} from "./About.js";
import {Skills} from "./Skills.js";
import {Experience} from "./Experience.js";
import {Education} from "./Education.js";
import {Projects} from "./Projects.js";
import {Resume} from "./Resume.js";
import {Contact} from "./Contact.js";

export class Main extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            clicked : Array(7).fill(false)
        }
        this.onHeaderClicked = this.onHeaderClicked.bind(this)
    }

    onHeaderClicked(i) {
        var clicked = Array(7).fill(false);
        clicked[i] = true;
        this.setState({clicked: clicked});
    }

    render() {
        return  (
        <HashRouter>
        <div className="row">
            <Header headerName="About Me" identifier="/" onClickFunc={this.onHeaderClicked} headerIndex="0" currState={this.state.clicked}/>
            <Header headerName="Skills" identifier="Skills"  onClickFunc={this.onHeaderClicked} headerIndex="1" currState={this.state.clicked}/>
            <Header headerName="Experience" identifier="Experience"  onClickFunc={this.onHeaderClicked} headerIndex="2" currState={this.state.clicked}/>
            <Header headerName="Education" identifier="Education"  onClickFunc={this.onHeaderClicked} headerIndex="3" currState={this.state.clicked}/>
            <Header headerName="Projects" identifier="Projects"  onClickFunc={this.onHeaderClicked} headerIndex="4" currState={this.state.clicked}/>
            <Header headerName="CV" identifier="Resume"  onClickFunc={this.onHeaderClicked} headerIndex="5" currState={this.state.clicked}/>
            <Header headerName="Contact" identifier="Contact"  onClickFunc={this.onHeaderClicked} headerIndex="6" currState={this.state.clicked}/>
        </div>
        <div className="contentArea">
            <Route exact path="/" component={About}></Route>
            <Route path="/Skills" component={Skills}></Route>
            <Route path="/Experience" component={Experience}></Route>
            <Route path="/Education" component={Education}></Route>
            <Route path="/Projects" component={Projects}></Route>
            <Route path="/Resume" component={Resume}></Route>
            <Route path="/Contact" component={Contact}></Route>
        </div>
        </HashRouter>
    )
    }
}
