import React from 'react'
import ScriptTag from 'react-script-tag';

export default class ContactComponent extends React.Component {
    render () {
        return (
            <div className={"contact"}>
                <div className={"contact-heading"}>If you’d like to get in touch: -  <a href="mailto:bharti2792@gmail.com" className="contact-footer" >EMAIL ME!</a></div>
                <div className={"contact-heading"}>If you’d like to see my more projects: -  <a href="https://github.com/bharti27" target="_blank" className="contact-footer">GITHUB</a></div>
                <div className={"contact-heading"}>If you’d like to know my opinions: -  <a href="https://twitter.com/Tiger_kittyyy" target="_blank" className="contact-footer">TWITTER</a></div>
                <div className={"contact-heading"}>If you’d like to know my Thoughts: -  <a href="https://medium.com/@bharti2792" target="_blank" className="contact-footer">MEDIUM</a></div>
            </div>

        )
    }
    componentDidMount () {
        //
        // const script = document.createElement("script");
        // script.src = "./profile.js";
        // script.async = true;
        // document.body.appendChild(script);
    }
}