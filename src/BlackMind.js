import React, { Component } from 'react'
import avatarWhite from "./avatar-white.svg";
import WorkComponent from "./WorkComponent";
import BlogComponent from "./BlogComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import {CSSTransition} from "react-transition-group";

export default class BlackMind extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div className={"BlackMind"}>
                { this.showComponents() }
            </div>
        )
    }
    showComponents() {
        if ( this.props.about ) {
            return <AboutComponent/>;
        } else if ( this.props.contact ) {
            return <ContactComponent/>;
        } else if ( this.props.skill ) {
            return <WorkComponent/>;
        } else if ( this.props.blogs ) {
            return <BlogComponent/>;
        }
        return null;
    }
}