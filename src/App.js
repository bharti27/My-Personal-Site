import React from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import TypeHello from "./TypeHello";
import CreativeMind from "./CreativeMind";
import BlackMind from "./BlackMind";
import { Transition } from 'react-transition-group';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            about: false,
            skill: false,
            blogs: false,
            contact: false,
            showTransition: false,
            firstClick: false
        };
        this.showHome = this.showHome.bind(this);
        this.showAbout = this.showAbout.bind(this);
        this.showSkills = this.showSkills.bind(this);
        this.showContact = this.showContact.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                { ! this.state.showTransition ? <TypeHello /> : null }
                    <CSSTransition
                        in = { this.state.showTransition }
                        appear = {false}
                        key = "particle"
                        timeout = {0}
                        className = { "creative-Mind" }
                    >
                        <CreativeMind { ...this.state }/>
                </CSSTransition>
                <Transition in={this.state.about || this.state.skill || this.state.contact} timeout={{
                    appear: 300,
                    enter: 300,
                    exit: 500,
                }}>
                    { state => (
                        <BlackMind { ...this.state }  state = { state}/>
                    )}
                </Transition>
                <nav className="navigation">
                    <span onClick={ this.showHome }>HOME</span> / <span onClick={ this.showAbout }>ABOUT</span> / <span onClick={ this.showSkills }>EXPERIENCE</span> / <span onClick={ this.showContact }>CONTACT</span>
                </nav>
            </React.Fragment>
        );
    }

    showHome() {
        this.setState( {
            about: false,
            skill: false,
            blogs: false,
            contact: false,
            showTransition: false,
            firstClick: true
        } );
    }

    showAbout () {
        this.setState( {
            about: true,
            skill: false,
            blogs: false,
            contact: false,
            showTransition: this.state.showTransition ? true : !this.state.showTransition,
            firstClick: true
        } );
    }


    showSkills() {
        this.setState(
            {
                about: false,
                skill: true,
                blogs: false,
                contact: false,
                showTransition:this.state.showTransition ? true: !this.state.showTransition
            }
        )
    }

    showContact() {
        this.setState(
            {
                about: false,
                skill: false,
                blogs: false,
                contact: true,
                showTransition: this.state.showTransition ? true: !this.state.showTransition
            }
        )
    }
}

export default App;
