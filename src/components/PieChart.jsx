import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Pie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [20, 40, 30, 25, 35],
            options: {
                chart: {
                    type: 'pie',
                },
                labels: ['Jack', 'Priya', 'Clinton', 'David', 'Rachel'],
                Responsive: [{
                    breakpoints: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'center'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
            <div id='pie'>
                <ReactApexChart options={this.state.options} series={this.state.series} type='pie' width={700} ></ReactApexChart>
            </div>
        )
    }
}

export default Pie;