import React, { Component } from 'react'
import Chart from "chart.js";
import Oracle from "./logo-oracle.png";
import Avizva from "./av.png";
import WP from "./WP-logo.png";
import GMU from "./GMU-logo-1.png";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

export default class WorkComponent extends React.Component {

constructor(props){
    super(props);
    this.myRef = React.createRef();
    var myLineChart;
}
    render () {
        return (
            <div className={""}>
                <div className={"tooltip"} id = "tooltip"/>
                <BrowserView>
                <div className={"my-chart"}>
                <canvas id="myChart" ref={this.myRef}/>
                </div>
                </BrowserView>
                <MobileView>
                    <div className={"my-chart"}>
                        <canvas id="myMobileChart" width="500" height="1000" ref={this.myRef}/>
                    </div>
                </MobileView>
            </div>
        )
    }
    componentDidMount() {
        const node = this.myRef.current.getContext("2d");
        let progress = document.getElementById('animationProgress');
        let az = new Image();
        az.src = Avizva;
        az.width = 50;
        az.height = 50;
        let wp = new Image();
        wp.src = WP;
        wp.height = 50;
        wp.width = 50;
        let gmu = new Image();
        gmu.src = GMU;
        gmu.height = 50;
        gmu.width = 50;
        let o = new Image();
        o.src = Oracle;
        o.height = 50;
        o.width = 50;
        const chartJson = {
            type: 'line',
            data: {
                labels: ['2015', '2018', '2019', '2020', '2020'],
                datasets: [{
                    data: [10, 40, 60, 80, 100],
                    backgroundColor: '#b61924',
                    borderColor: '#b61924',
                    borderWidth: 0,
                    fill: false,
                    pointRadius: 15,
                    pointHoverRadius: 10,
                    pointStyle: [ '',az, wp, gmu, o, o]
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                },
                showAllTooltips: false,
                legend: {
                    display: false,
                },
                responsive: true,
                title: {
                    display: true,
                    text: 'Experience over time',
                    fontColor: 'rgba(255,255,255,.70)',
                    fontFamily: 'monospace',
                    position: 'bottom',
                    fontSize: '16'
                },
                tooltips: {
                    // Disable the on-canvas tooltip
                    enabled: false,
                    intersect: false,
                    custom: function(tooltipModel) {
                        if ( undefined !== tooltipModel.body ) {
                            let node = document.getElementById( "tooltip" );
                            switch ( tooltipModel.body[0].lines[0] ) {
                                case "40":
                                    node.innerHTML = "<b>AVIZVA</b> - July' 2015 - Aug' 2018 <br> Senior Front-End Engineer L1";
                                    break;
                                case "60":
                                    node.innerHTML = "<b>The Washington Post</b> - May' 2019 - Dec' 2019 <br> Software Developer";
                                    break;
                                case "80":
                                    node.innerHTML = "<b>GMU</b> - Jan' 2020 - May' 2020 <br> CS Graduate Teaching Assistance";
                                    break;
                                case "100":
                                    node.innerHTML = "<b>Oracle</b> - May' 2020 - present <br> Full Stack Software Developer III";
                                    break;
                                case "10": break;
                            }
                        }

                        }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true
                        },
                        ticks: {
                            fontColor: "#b61924",
                            fontSize: '12'
                        },
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                            fontSize: 0,
                            suggestedMax: 110,
                            beginAtZero: true,
                            stepSize: 20
                        }
                    }]
                }
            }
        };
        if ( this.myLineChart ) {
            this.myLineChart.destroy();
        }
         this.myLineChart = new Chart(node, chartJson);

    }
    componentWillUnmount() {
        this.myLineChart.destroy();
    }
}