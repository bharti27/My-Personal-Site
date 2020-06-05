import React, { Component } from 'react'
import Particle from "./Particle";
import avatar from "./avatar.svg";
import avatarWhite from "./avatar-white.svg";

export default class CreativeMind extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div className={"creativeMind"} >
                <Particle/>
                <img src={avatar} className="avatar" alt="my avatar"/>
                <img src={avatarWhite} className="avatar avatar-white" alt="My creative avatar"/>
            </div>
        )
    }
}