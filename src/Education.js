import React from "react";

export class Education extends React.Component {
    
    render() {

        return (<div className="expEduMain">
        <div>
            <div><img onClick={() => window.open("https://www.northeastern.edu/", "_blank")} src="https://raw.githubusercontent.com/cbdscolin/cbdscolin.github.io/master/resources/img/neu_logo.jpg"/></div>
            <ul>Northeastern University, Boston, USA
                <li>Master's degree in Computer Science</li>
                <li>Jan 2020 - Present</li>
            </ul>
        </div>
        <div>
            <div ><img onClick={() => window.open("https://www.rvce.edu.in/", "_blank")} src="https://raw.githubusercontent.com/cbdscolin/cbdscolin.github.io/master/resources/img/rvce_logo_logo.jpg"/></div>
            <ul>R. V. College of Engineering, Bangalore, India
                <li>Bachelor's degree in Computer Science</li>
                <li>June 2012 - May 2016</li>
            </ul>
        </div>
        </div>)
    }
}