import React from "react";
import "./components.css"

export class Resume extends React.Component {
    
    render() {

        return (
        <div className="resumeMain">
            <div><button className="btn btn-primary btn-lg" onClick={() => window.location = "https://github.com/cbdscolin/cbdscolin.github.io/raw/master/resources/resume/resume_colin_dsouza.pdf"}>Download CV</button></div>
            <iframe className="resumecontainer" src="./resources/resume/resume_colin_dsouza.pdf"></iframe>
        </div>
        )
    }
}