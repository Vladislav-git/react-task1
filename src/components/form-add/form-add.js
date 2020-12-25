import React from 'react';

const default_model = {task_name:'', 
firstname:'', 
secondname:'', 
email:'', 
deadeline:'', 
description:'',
};

export default class FormAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = default_model;
    this.onTaskNameChange = this.onTaskNameChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onSecondNameChange = this.onSecondNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onDeadlineChange = this.onDeadlineChange.bind(this);
    }

    onTaskNameChange(event) {
        const valueToChange = event.target.value;
        this.setState({
            task_name: valueToChange,
        })
    }

    onFirstNameChange(event) {
        const valueToChange = event.target.value;
        this.setState({
            firstname: valueToChange,
        })
    }

    onSecondNameChange(event) {
        const valueToChange = event.target.value;
        this.setState({
            secondname: valueToChange,
        })
    }

    onEmailChange(event) {
        const valueToChange = event.target.value;
        this.setState({
            email: valueToChange,
        })
    }

    onDescriptionChange(event) {
        const valueToChange = event.target.value;
        this.setState({
            email: valueToChange,
        })
    }

    onDeadlineChange(event) {
        const valueToChange = event.target.value;
        this.setState({
            deadeline: valueToChange,
        })
    }

    componentDidUpdate(props) {
        console.log(props.data.id, (props.data.id !== this.state.id))
        if (props.data.id && (props.data.id !== this.state.id)) {
            this.setState(props.data)
        }
    }

    render() {
        
        const {task_name, firstname, secondname, email, deadeline, description} = this.state;
        return (
            <form>
                <h3>Add task</h3>
                <p>Task name: <input type='text' placeholder='task name' value={task_name} onChange={this.onTaskNameChange} /></p>
                <p>Firstname: <input type='text' placeholder='firstname' value={firstname} onChange={this.onFirstNameChange} /></p>
                <p>Secondname: <input type='text' placeholder='secondname' value={secondname} onChange={this.onSecondNameChange} /></p>
                <p>Email: <input type='text' placeholder='email' value={email} onChange={this.onEmailChange} /></p>
                <p> Deadline:
                    <select value={deadeline} onChange={this.onDeadlineChange}>
                        <option value='1 hour'>1 hour</option>
                        <option value='3 hours'>3 hours</option>
                        <option value='5 hours'>5 hours</option>
                        <option value='1 day'>1 day</option>
                        <option value='2 days'>2 days</option>
                    </select>
                </p>
                <p>Task description: <input type='text' placeholder='Description' value={description} onChange={this.onDescriptionChange} /></p>
                
                <button type='submit'>add</button>
            </form>
        )
    }
    
}