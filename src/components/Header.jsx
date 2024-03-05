/* eslint-disable react/prop-types */
import { Component } from "react";
import '../App.css'

class Header extends Component {
    render() {
        return(
        <div className="header">
                <span className="title">
                    { this.props.title }
                </span>
            </div>
        )
    }
}

export default Header