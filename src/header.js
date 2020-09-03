import React from "react";
import './header.css';
import { NavLink } from "react-router-dom";

export class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            index: this.props.headerIndex
        }
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(event) {
        this.props.onClickFunc(this.state.index)
    }

    render() {
        var sty = null
        if (this.props.currState[this.state.index] === true) {
            sty = {
                backgroundColor: "black"
            }
        }
        return (<h3 onClick={this.changeSelected} className="col-sm-1 headertitle" style={sty}><NavLink to={this.props.identifier}>{this.props.headerName}</NavLink>{this.props.children}</h3>);
    }
}