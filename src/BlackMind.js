import React from 'react'
import WorkComponent from "./WorkComponent";
import BlogComponent from "./BlogComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";

export default class BlackMind extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div className={"BlackMind " + this.props.state } >
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