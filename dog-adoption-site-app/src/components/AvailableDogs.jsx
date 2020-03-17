import React, { Component } from 'react';

class AvailableDogs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div >

                    {   //use a map function to iterate through the array and print out each object
                        this.props.dogArray.map((dog, index) => {
                            return (
                                <div key={index}>

                                    <p>Dog Name:{dog.dogName}</p>
                                    <p>Dog Age:{dog.dogAge}</p>
                                    <p>Dog Breed:{dog.dogBreed}</p>
                                    <p>Potty Trained:{dog.trained}</p>
                                    <p>Color:{dog.dogColor}</p>

                                </div>
                            )

                        })
                    }
                </div>


            </div>
        );
    }
}

export default AvailableDogs;