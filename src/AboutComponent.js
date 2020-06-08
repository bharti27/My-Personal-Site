import React, { Component } from 'react'
import Typical from 'react-typical'
import Anime from "react-anime";
//  <p className={"about-para"}>What, this is enough but wait one last thing...</p>
export default class AboutComponent extends React.Component {
    render () {
        return (
            <div className={"about"}>
                <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 500}>
                <h1 className={"about-title"}>I'm a Full Stack Developer based in US.</h1>
                    <section>
                <p className={"about-para"}>This is a place where I think I should brag about myself. So, here it goes. </p>
                <p className={"about-para"}>After tirelessly working on various projects and achieving several milestones I moved to U.S in 2018 to pursue my dream. After two years of sleep-deprived long nights
                    and a lot of coffee, I successfully completed my Masters's degree in Software Engineering from George Mason University. And now I am still sleep-deprived and running on coffee but... </p>

                <p className={"about-para no-justify"}>I really Love to <Typical
                    steps={['#Code!', 1500, '#Create!', 1500, '#Innovate!', 1500 ]}
                    loop={Infinity}
                    wrapper="span"
                    className={ "red"}
                />
                </p>
                </section>
                </Anime>
            </div>
        )
    }
}