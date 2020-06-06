import React from 'react'
import ScriptTag from 'react-script-tag';
import Anime, {anime} from 'react-anime';

export default class ContactComponent extends React.Component {
    render () {
        return (
            <div className={"contact"}>
                <Anime delay={anime.stagger(100)}
                       scale={[.1, .9]}>
                <div className={"contact-heading"}>If you’d like to get in touch: -  <a href="mailto:bharti2792@gmail.com" className="contact-footer" >EMAIL ME!</a></div>
                <div className={"contact-heading"}>If you’d like to know more about me: -  <a href="https://www.linkedin.com/in/bharti-sharma-b933a967/" target="_blank" className="contact-footer">LINKEDIN</a></div>
                <div className={"contact-heading"}>If you’d like to see more projects: -  <a href="https://github.com/bharti27" target="_blank" className="contact-footer">GITHUB</a></div>
                <div className={"contact-heading"}>If you’d like to know my opinions: -  <a href="https://twitter.com/Tiger_kittyyy" target="_blank" className="contact-footer">TWITTER</a></div>
                <div className={"contact-heading"}>If you’d like to know my Thoughts: -  <a href="https://medium.com/@bharti2792" target="_blank" className="contact-footer">MEDIUM</a></div>
                </Anime>
            </div>

        )
    }
    componentDidMount () {
    }
}