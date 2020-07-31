import React, { Component } from 'react';
import UserData from './UserData';

class UserForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: '',
            userAge: 0,
            userGender: 'Other',
            userOccupation:'',
            outputHidden: 'hidden'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        switch(event.target.id){
            case "userName":{
                this.setState({userName: event.target.value});
                break;
            }
            case "userPassword":{
                this.setState({userPassword: event.target.value});
                break;
            }
            case "userAge":{
                this.setState({userAge: event.target.value});
                break;
            }
            case "userGender":{
                this.setState({userGender: event.target.value});
                break;
            }
            case "userOccupation":{
                this.setState({userOccupation: event.target.value});
                break;
            }
            default:
                alert("Failed to read handleChange event input")
        }
      }
    
      handleSubmit(event) {
        this.setState({
            outputHidden: "visible"
        })
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexFlow:'column nowrap',alignItems:'flex-start'}}>
                    <p>Enter the following fake details:</p>
                    <label>
                        Username  :
                        <input type="text" id="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password  :
                        <input type="password" id="userPassword" value={this.state.userPassword} onChange={this.handleChange} />
                    </label>
                    <label>
                        Age       :
                        <input type="number" id="userAge" value={this.state.userAge} onChange={this.handleChange} min="0" max="200" />
                    </label>
                    <label>
                        Gender    :
                        <select type="text" id="userGender" value={this.state.userGender} onChange={this.handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label>
                        Occupation:
                        <input type="text" id="userOccupation" value={this.state.userOccupation} onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div style={{visibility:`${this.state.outputHidden}`}}>
                    <UserData   userName={this.state.userName}
                                userPassword={this.state.userPassword}
                                userAge={this.state.userAge}
                                userGender={this.state.userGender}
                                userOccupation={this.state.userOccupation}/>
                </div>
            </div>
        );
      }
}


export default UserForm;