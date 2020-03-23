import React, { Component } from 'react';

class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        //set current state of all dog properties to blank
        this.state = {
            dogName: '',
            dogAge: '',
            dogBreed: '',
            trained: '',
            dogColor: '',
        }
    }

    //Create function to render when button is pressed
    handleSubmission = (event) => {
        event.preventDefault();
     
        //reset the current state of the dog array
        this.setState(
            {
                dogArray: this.state.dogArray
            }
        )
        //pull down call back function from the parent and insert the state of the array so it will be sent and updated in the parent
        this.props.updateDogArray(this.state)
        //clear the form
        this.setState(
            {
                dogName: '',
                dogAge: '',
                dogBreed: '',
                trained: false,
                dogColor: '',
            }
        )
    }

    //update current state name
    changeName = (event) => {
        this.setState(
            {
                dogName: event.target.value
            }
        )
    }

    //update current state age
    changeAge = (event) => {
        this.setState(
            {
                dogAge: event.target.value
            }
        )
    }

    //update current state breed
    changeBreed = (event) => {
        this.setState(
            {
                dogBreed: event.target.value
            }
        )
    }

    //update current state training
    changeTraining = (event) => {
        this.setState(
            {
                trained: !this.state.trained
            }
        )
    }

    //update current state color
    changeColor = (event) => {
        this.setState(
            {
                dogColor: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset className='border'>
                        <legend className='bold'>Adoption Form</legend>
                        <br />
                        <div>
                            <label htmlFor="dogName" className='bold'>Dog Name: </label>
                            <input type="text" id='dogName' name='dogName' onChange={this.changeName} value={this.state.dogName} className='input' />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="dogAge" className='bold'>Dog Age: </label>
                            <input type="text" id='dogAge' name='dogAge' onChange={this.changeAge} value={this.state.dogAge} className='input'/>
                        </div>
                        <br />
                        <div>   <label htmlFor="dogBreed" className='bold'>Dog Breed: </label>
                            <input type="text" id='dogBreed' name='dogBreed' onChange={this.changeBreed} value={this.state.dogBreed} className='input'/>
                        </div>
                        <br />
                        <div>
                          
                            <select name="dogColor" id="dogColor" value={this.state.dogColor} onChange={this.changeColor} className='input' >
                                <option >--Please choose a color--</option>
                                <option value="white">white</option>
                                <option value="brown">brown</option>
                                <option value="black">black</option>
                                <option value="spotted">spotted</option>
                                <option value="other">other</option>
                            </select>

                        </div>
                        <br />
                        <div>
                            <label htmlFor="trained" className='bold'>Potty Trained: </label>
                            <input type="checkbox" id='trained' name='trained' onChange={this.changeTraining} checked={this.state.trained} />
                        </div>
                        <br />
                        <br />
                        <button onClick={this.handleSubmission}className='input'>Submit Form</button>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default AddAdoptionForm;