import React from "react";

export class Contact extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.copyText = this.copyText.bind(this)
    }

    copyText(event) {
        navigator.clipboard.writeText("cbdscolin@gmail.com").then(function(){
        }, function(){
            console.log("Copy email failed")
        });
        event.preventDefault();
    }
    
    render() {
        return (
        <div className="contactUs">
        <div>
            <div>Connect on LinkedIn: </div>
            <div>
                <img title="Click to visit LinkedIn Profile" onClick={() => window.open("https://www.linkedin.com/in/cbdscolin/", "_blank")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"/>
            </div>
        </div>
        <div> 
            <div>Follow on GitHub: </div>
            <div>
                <img title="Click to visit GitHub Profile" onClick={() => window.open("https://www.github.com/cbdscolin/", "_blank")} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
            </div>
        </div>
        <div> 
            <div>Email Address: </div>
            <div>
                <a onClick={this.copyText} title="Click to copy email address" href="#">cbdscolin@gmail.com</a>
            </div>
        </div>
        </div>)
    }
}