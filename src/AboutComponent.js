import React, { Component } from 'react'
import Typical from 'react-typical'
import full from "./full.png";
import ninja from "./ninja.png";

export default class AboutComponent extends React.Component {
    render () {
        return (
            <div className={"about"}>
                <div><img src={full} alt="full" className={"full-stack"}/>
                <span className={"about-title"}>I'm a Full Stack Developer based in US.</span></div>
                <p className={"about-para"}>This is a place where i think i should brag about myself. So, here it goes. </p>
                <p className={"about-para"}>After tirelessly working on various projects and achieving various milestones i moved to U.S in 2018 to pursue my dream. Two years of sleep deprived long nights and a lot of coffee i completed
                    my Masters degree in software Engineering from George Mason University. And Now i am still sleep deprived and running on coffees but... </p>
                <p className={"about-para"}>What, that is enough but wait one last thing...</p>
                <p className={"about-para"}>I really Love to <Typical
                    steps={['#Code!', 1500, '#Create!', 1500, '#Innovate!', 1500, '#Design!' ]}
                    loop={Infinity}
                    wrapper="span"/>
                </p>
            </div>
        )
    }
}