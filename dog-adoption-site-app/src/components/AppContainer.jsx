import React, { Component } from 'react';
import AvailableDogs from './AvailableDogs';
import AddAdoptionForm from './AddAdoptionForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogArray: [],
        }
    }
    //Create a call back function to reference in the child component
    updateDogArray = (newDog) => {
        //add passed item to array
        this.state.dogArray.push(newDog);
        //update state globally
        this.setState({ dogArray: this.state.dogArray });
    }

    render() {
        return (
            <div>
            <h1>Dog Adoption Site</h1>
            <div id='container'>

                <div id='adoption'>
                    <h1>Available Dogs</h1>
                    {/* pass the current state of dogArray to child component */}
                    <AvailableDogs dogArray={this.state.dogArray} />
                </div>

                <div id='form'>
                    <h1>Form</h1>
                    {/* pass above function into the child */}
                    <AddAdoptionForm updateDogArray={this.updateDogArray} />
                </div>

            </div>
            </div>
        );
    }
}

export default AppContainer;