import React from "react";

export class Skills extends React.Component {
    
    render() {

        return (<div >
            <TechTypeBlock techTypeHeader="Back-end Technologies">
                <SkillDesc skillName="Flask" skillLevel="2/5"/>
                <SkillDesc skillName="MySQL" skillLevel="3/5"/>
                <SkillDesc skillName="ElasicSearch" skillLevel="3/5"/>
                <SkillDesc skillName="Memcached" skillLevel="2/5"/>
                <SkillDesc skillName="DynamoDB" skillLevel="3/5"/>
            </TechTypeBlock>
            <TechTypeBlock techTypeHeader="Web Technologies">
                <SkillDesc skillName="Javascript" skillLevel="3/5"/>
                <SkillDesc skillName="HTML" skillLevel="4/5"/>
                <SkillDesc skillName="React" skillLevel="2/5"/>
                <SkillDesc skillName="JQuery" skillLevel="2/5"/>
                <SkillDesc skillName="CSS" skillLevel="2/5"/>
            </TechTypeBlock>
            <TechTypeBlock techTypeHeader="DevOps">
                <SkillDesc skillName="Jenkins" skillLevel="4/5"/>
                <SkillDesc skillName="Docker" skillLevel="2/5"/>
                <SkillDesc skillName="Nagios" skillLevel="3/5"/>
                <SkillDesc skillName="Splunk" skillLevel="2/5"/>
                <SkillDesc skillName="Apache" skillLevel="3/5"/>
            </TechTypeBlock>
            <TechTypeBlock techTypeHeader="IDEs & Source Control">
                <SkillDesc skillName="Github" skillLevel="4/5"/>
                <SkillDesc skillName="Visual Studio" skillLevel="3/5"/>
                <SkillDesc skillName="Idea IntelliJ" skillLevel="4/5"/>
                <SkillDesc skillName="Perforce" skillLevel="3/5"/>
            </TechTypeBlock>
        </div>)
    }
}

export class TechTypeBlock extends React.Component {

    render() {
        var sty2 = {
            marginLeft: "300px",
            display: "inline-block"
        }
        return (<ul style={sty2}>{this.props.techTypeHeader} {this.props.children}</ul>)
    }
}


export class SkillDesc extends React.Component {


    render() {
        var sty = {
            display: "inline-block",
            padding: "10px"
        };

        return (<li>
        <div style={sty}>{this.props.skillName} </div>
        <div style={sty}>{this.props.skillLevel}</div>
        </li>)
    }
}