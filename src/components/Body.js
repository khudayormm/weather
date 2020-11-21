import React from 'react';
import { Container, Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import axios from 'axios';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day0: [],
            day1: [],
            day2: [],
            day3: [],
            day4: [],
            day5: [],
            day6: [],
            day7: [],
            day8: [],
            day9: []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
            params: {
              q: 'urgench, uz',
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
          
          axios.request(options).then((res) => {
            this.setState({
                day0: res.data.list[0],
                day1: res.data.list[1],
                day2: res.data.list[2],
                day3: res.data.list[3],
                day4: res.data.list[4],
                day5: res.data.list[5],
                day6: res.data.list[6],
                day7: res.data.list[7],
                day8: res.data.list[8],
                day9: res.data.list[9],
            })
          }).catch(function (error) {
              console.error(error);
          });
    }

    render() {
        var dates = [];
        const { day0, day1, day2, day3, day4, day5, day6, day7, day8, day9 } = this.state;
         const someData = [day0.dt, day1.dt, day2.dt, day3.dt, day4.dt, day5.dt, day6.dt, day7.dt, day8.dt, day9.dt];
        for (let index = 0; index < someData.length; index++) {
            const element = new Date(someData[index] * 1000);
            dates[index] = element.toDateString();
        }
        console.log(dates[0]);

         return(
            <div className="container py-5">
              <Container fluid>
                    <div className="row">
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <div className="row">
                                        <div className="col-6">
                                            <CardTitle tag="h5">-5°</CardTitle>
                                        </div>
                                        <div className="col-6">
                                            <CardText>-25°</CardText>
                                        </div>
                                    </div>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>                        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        

                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>     
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>        
                        <div className="col-md-2 my-1">
                            <Card>
                                <CardHeader>Header</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">-5°</CardTitle>
                                    <CardText>-25°</CardText>
                                    <CardText>16 m/s</CardText>
                                    
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </div>           
                        
                    </div>
              </Container>
          </div>
        )
    }
}


export default Body;