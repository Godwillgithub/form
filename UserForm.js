import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state ={
        step: 1,
        firstname: '',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',
        
    }
    // Proceed to the next step
    nextStep =() => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }
        // Go back to previous page
    prevStep =() => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

        // Handle field change
        handChange = input => e =>{
            this.setState ({[input]:e.target.value});
        }


  render() {
    const {step} = this.state;
    const { firstname, lastname, email, occupation, city, bio }= this.state
    const values ={ firstname, lastname, email, occupation, city, bio }
    
    switch(step){
        case 1:
        return(
            < FormUserDetails
            nextStep ={this.nextStep} 
            handleChange ={this.handChange}
            values ={values}
            />
        );
        case 2:
        
        return(
            < FormPersonalDetails
            nextStep ={this.nextStep} 
            prevStep ={this.prevStep} 
            handleChange ={this.handChange}
            values ={values}
            />
        );
        case 3:
            return(
                < Confirm
                nextStep ={this.nextStep} 
                prevStep ={this.prevStep} 
            
                values ={values}
                />
        );
               
        case 4:
            return < Success />;
                
    }
  }
}

export default UserForm;
