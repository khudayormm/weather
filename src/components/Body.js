import React from 'react';
import { Container, Card, CardHeader, CardBody,
    CardTitle, CardText, Jumbotron } from 'reactstrap';
import axios from 'axios';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: [],
            temp_d: [],
            temp_n: [],
            speed: [],
            clouds: [],
            dt: []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
            params: {
              q: 'Urgench, uz',
              lat: '35',
              lon: '139',
              cnt: '10',
              units: 'metric or imperial'
            },
            headers: {
              'x-rapidapi-key': 'c3d652bbd8mshadb4ff7abc131ecp1558bejsnf66ed9d6f099',
              'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
          };

          
          const icons = [];
          const temp_day = [];
          const temp_night = [];
          const wind = [];
          const cloud = [];
          const date = [];
          axios.request(options).then((res) => {
              for (let index = 0; index < 10; index++) {
                  icons[index] = `http://openweathermap.org/img/wn/${res.data.list[index].weather[0].icon}.png`;
                  temp_day[index] = res.data.list[index].temp.day;
                  temp_night[index] = res.data.list[index].temp.night;
                  wind[index] = res.data.list[index].speed;
                  cloud[index] = res.data.list[index].clouds;
                  date[index] = res.data.list[index].dt;
                }
              this.setState({
                  icon: icons, 
                  temp_d: temp_day,
                  temp_n: temp_night,
                  speed: wind,
                  clouds: cloud,
                  dt: date
              })
                               
          }).catch(function (error) {
              console.error(error);
          });
    }

    render() {   
        const dates = [];
        const day = [];
        for (let index = 0; index < 10; index++) {
            dates[index] = new Date( this.state.dt[index] * 1000 )   ;
            day[index]   = dates[index].toLocaleString();
        }  
        return(
            <div className="container py-2">
              <Container fluid>
                    <div className="row">
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[0].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[0]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[0] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[0] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[0] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[0]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[1].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[1]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[1] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[1] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[1] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[1]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[2].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[2]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[2] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[2] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[2] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[2]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[3].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[3]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[3] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[3] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[3] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[3]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[4].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[4]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[4] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[4] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[4] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[4]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[5].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[5]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[5] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[5] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[5] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[5]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[6].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[6]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[6] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[6] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[6] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[6]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[7].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[7]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[7] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[7] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[7] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[7]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[8].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[8]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[8] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[8] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[8] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[8]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        <div className="col-md-2 my-1">
                            <Card>
                            <CardHeader>{day[9].slice(0, -11)}</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={this.state.icon[9]} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <CardTitle tag="h4">{Math.round(this.state.temp_d[9] - 273)}°</CardTitle>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.speed[9] * 3.6 )}</CardText>
                                        </div>
                                        <div className="col-6">
                                            <CardText>{Math.round(this.state.temp_n[9] - 273)}°</CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                          m/s
                                        </div>
                                        <div className="col-6">
                                            <CardText>{this.state.clouds[9]}%</CardText>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>   
                        

                    </div>
                </Container>
              <div className="col my-4">
                <Jumbotron fluid>
                <Container fluid>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        About the project
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ob havo ma'lumoti</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Developer: Xudayor Mavlonov
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Orqaga</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </Container>
                </Jumbotron>
                </div>
          </div>
        )
    }
}


export default Body;