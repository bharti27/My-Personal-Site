import React from 'react'
import ScriptTag from 'react-script-tag';

export default class ContactComponent extends React.Component {
    render () {
        return (
            <div className={"contact"}>
                <ScriptTag isHydrating={false} type="application/javascript" src="https://platform.linkedin.com/badges/js/profile.js" />
                <div className={"contact-heading"}>If you’d like to get in touch: -  <a href="mailto:bharti2792@gmail.com" className="contact-footer">Email Me!</a></div>
                <div class="contact-linkedin">
                    <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                         data-type="vertical" data-theme="dark" data-vanity="bharti-sharma-b933a967"><a
                        className="LI-simple-link"
                        href='https://www.linkedin.com/in/bharti-sharma-b933a967?trk=profile-badge'>Bharti Sharma</a>
                    </div>
                </div>
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