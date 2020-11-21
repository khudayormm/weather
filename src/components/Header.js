import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import axios from 'axios';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            currlogo: '',
            temp: 0,
            dt: '',
            wind: 0,
            cloud: 0
        }
    }

    componentDidMount() {

        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Urgench&appid=cef9a8bb53755c7912ae57fa1b7a93c3')
        .then(res => { console.log(res.data)
            this.setState({
                name: res.data.name,
                currLogo: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
                temp: Math.round( res.data.main.temp ) - 273,
                dt: res.data.dt,
                wind: Math.round(res.data.wind.speed * 3.6),
                cloud: res.data.clouds.all
            })
        })
        .catch(err => console.log(err));

        
    }

    render() {
        var myDate = new Date( this.state.dt * 1000);
        var day = myDate.toLocaleString();
        return (
          <div>
            <Jumbotron fluid>
              <Container fluid>
              <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="display-3">{this.state.name}</h1>
                    </div>
                    <div className="col-6">
                        <h1 className="display-3">{this.state.temp}°</h1>
                    </div>
                    <div className="col-3">
                                <img src={this.state.currLogo} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <hr/>
                        <p>{`Shamol: ${this.state.wind} m/s`}</p>
                    </div>
                    <div className="col-6">
                        <hr/>
                        <p>{day}</p>
                    </div>
                    <div className="col">
                        <hr/>
                            <p>{`Bulut: ${this.state.cloud} %`}</p>
                        </div>
                </div>
                </div>
              </Container>
            </Jumbotron>
          </div>
        );
      };
}

export default Header;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             logo: ''
//         }
//     }

//     componentDidMount() {
//         var axios = require("axios").default;
//         var options = {
//         method: 'GET',
//         url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
//         params: {
//             q: 'urgench, uz',
//             lat: '35',
//             lon: '139',
//             cnt: '10',
//             units: 'metric or imperial'
//         },
//         headers: {
//             'x-rapidapi-key': 'c3d652bbd8mshadb4ff7abc131ecp1558bejsnf66ed9d6f099',
//             'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
//         }
//         };

//         axios.request(options).then((response) => {
//             this.setState({
//                 logo: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
//             })
//         }).catch(function (error) {
//             console.error(error);
//         });
//     }

//     render() {
//         return(
//             <div>
//                 <img src={this.state.logo} alt=""/>
//             </div>
//         )
//     }
// }

// export default Header;