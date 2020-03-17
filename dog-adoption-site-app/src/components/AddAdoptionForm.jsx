import React,{Component} from 'react';

class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dogName: '',
            dogAge: '',
            dogBreed: '',
            trained: '',
            dogColor: '',
         }
    }

    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset>
                        <legend>Adoption Form</legend>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default AddAdoptionForm;