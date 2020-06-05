import React from 'react';
import Particles from 'react-particles-js';
import particlesJSON from './particles.json';

export default class Particle extends React.Component {
    constructor(props) {
        super(props);
    }
     render() {
        return (
                <Particles params={particlesJSON} />
        );
    }

}