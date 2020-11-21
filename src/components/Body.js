import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col-6">
                        2 of 3 (wider)
                    </div>
                    <div className="col">
                        3 of 3
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col-5">
                        2 of 3 (wider)
                    </div>
                    <div className="col">
                        3 of 3
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Body;