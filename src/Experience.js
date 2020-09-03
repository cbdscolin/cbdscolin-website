import React from "react";

export class Experience extends React.Component {
    
    render() {
        return (<div className="expEduMain">
        <div>
            <div><img onClick={() => window.open("https://www.northeastern.edu/", "_blank")} src="https://raw.githubusercontent.com/cbdscolin/cbdscolin.github.io/master/resources/img/neu_logo.jpg"/></div>
            <ul>Northeastern University, Boston, USA
                <li>Teaching Assistant</li>
                <li>4 months (June 2020 - Present)</li>
            </ul>
        </div>
        <div>
            <div ><img onClick={() => window.open("https://www.zynga.com/", "_blank")} src="https://raw.githubusercontent.com/cbdscolin/cbdscolin.github.io/master/resources/img/zynga_logo.jpg"/></div>
            <ul>Zynga Games, Bangalore, India
                <li>Software Engineer</li>
                <li>3.5 Years Experience (June 2016 - Dec 2019)</li>
            </ul>
        </div>
        </div>)
    }
}