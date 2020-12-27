import React from 'react';

const default_model = {
    task_name: '',
    firstname: '',
    secondname: '',
    email: '',
    deadeline: '1',
    description: '',
    id: 0
};

const defaultErrorClass = 'error';

export default class FormAdd extends React.Component {

        constructor(props) {
            super(props);
            this.state = {model: default_model, 
                form: {
                    taskNameBlock: {
                        errorClass: '',
                        errorText: '',
                    },
                    firstNameBlock: {
                        errorClass: '',
                        errorText: '',
                    },
                    secondNameBlock: {
                        errorClass: '',
                        errorText: '',
                    },
                    emailBlock: {
                        errorClass: '',
                        errorText: '',
                    },
                    descriptionBlock: {
                        errorClass: '',
                        errorText: '',
                    },

                }};
            this.onTaskNameChange = this.onTaskNameChange.bind(this);
            this.onFirstNameChange = this.onFirstNameChange.bind(this);
            this.onSecondNameChange = this.onSecondNameChange.bind(this);
            this.onEmailChange = this.onEmailChange.bind(this);
            this.onDescriptionChange = this.onDescriptionChange.bind(this);
            this.onDeadlineChange = this.onDeadlineChange.bind(this);
        }

        onTaskNameChange(event) {
            const valueToChange = event.target.value;
            const taskNameBlock = {errorClass: '', errorText: ''};
            if (valueToChange.length < 2) {
                taskNameBlock.errorClass = defaultErrorClass;
                taskNameBlock.errorText = 'invalid taskname'
            }
            this.setState({
                model:{
                    task_name: valueToChange,
                },
                form:{
                    taskNameBlock: taskNameBlock,
                }
                
            }, () => console.log(this.state))
            
        }

        onFirstNameChange(event) {
            const valueToChange = event.target.value;
            const firstNameBlock = {errorClass: '', errorText: ''};
            if (valueToChange.length < 2) {
                firstNameBlock.errorClass = defaultErrorClass;
                firstNameBlock.errorText = 'invalid firstname'
            }
            this.setState({
                model:{
                    firstname: valueToChange,
                },
                form:{
                    firstNameBlock: firstNameBlock,
                }
                
            })
        }

        onSecondNameChange(event) {
            const valueToChange = event.target.value;
            const secondNameBlock = {errorClass: '', errorText: ''};
            if (valueToChange.length < 2) {
                secondNameBlock.errorClass = defaultErrorClass;
                secondNameBlock.errorText = 'invalid secondname'
            }
            this.setState({
                model:{
                    secondname: valueToChange,
                },
                form:{
                    secondNameBlock: secondNameBlock,
                }
                
            })
        }

        onEmailChange(event) {
            const valueToChange = event.target.value;
            const emailBlock = {errorClass: '', errorText: ''};
            if (valueToChange.match(/[a-zA-z]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}/) === null) {
                emailBlock.errorClass = defaultErrorClass;
                emailBlock.errorText = 'invalid email'
            }
            this.setState({
                model:{
                    email: valueToChange,
                },
                form:{
                    emailBlock: emailBlock,
                }
                
            })
        }

        onDescriptionChange(event) {
            const valueToChange = event.target.value;
            const descriptionBlock = {errorClass: '', errorText: ''};
            if (valueToChange.length < 2) {
                descriptionBlock.errorClass = defaultErrorClass;
                descriptionBlock.errorText = 'description must be 2+ chars'
            }
            this.setState({
                model:{
                    description: valueToChange,
                },
                form:{
                    descriptionBlock: descriptionBlock,
                }
                
            })
        }

        onDeadlineChange(event) {
            const valueToChange = event.target.value;
            this.setState({
                model:{
                    deadeline: valueToChange,
                }
            })
        }

        componentDidMount() {
            if (this.props.data.id) {
                this.setState({model: this.props.data})
            }
        }

        componentDidUpdate(prevProps) {
            if (this.props.data.id && (this.state.model.id !== this.props.data.id)) {
                this.setState({model: this.props.data})
            } else if (!this.props.data.id && prevProps.data.id === this.state.model.id) {
                this.setState({model: default_model})
            }
        }

    render() {
        const {task_name, firstname, secondname, email, deadeline, description} = this.state.model;
        const {taskNameBlock, firstNameBlock, secondNameBlock, emailBlock, descriptionBlock} = this.state.form;
        
        return (
            <form>
                <h3>Add task</h3>
                <p className={taskNameBlock.errorClass} >Task name: <input type='text' placeholder='task name' value={task_name} onChange={this.onTaskNameChange} /><span>{taskNameBlock.errorText}</span></p>
                <p className={firstNameBlock.errorClass} >Firstname: <input type='text' placeholder='firstname' value={firstname} onChange={this.onFirstNameChange} /><span>{firstNameBlock.errorText}</span></p>
                <p className={secondNameBlock.errorClass} >Secondname: <input type='text' placeholder='secondname' value={secondname} onChange={this.onSecondNameChange} /><span>{secondNameBlock.errorText}</span></p>
                <p className={emailBlock.errorClass} >Email: <input type='text' placeholder='email' value={email} onChange={this.onEmailChange} /><span>{emailBlock.errorText}</span></p>
                <p> Deadline:
                    <select value={deadeline} onChange={this.onDeadlineChange}>
                        <option value='1'>1 hour</option>
                        <option value='3'>3 hours</option>
                        <option value='5'>5 hours</option>
                        <option value='24'>1 day</option>
                        <option value='48'>2 days</option>
                    </select>
                </p>
                <p className={descriptionBlock.errorClass} >Task description: <input type='text' placeholder='Description' value={description} onChange={this.onDescriptionChange} /><span>{descriptionBlock.errorText}</span></p>
                
                <button type="button" onClick={() => this.props.onChangeAdd(this.state.model)}>{this.state.id ? 'change' : 'add'}</button>
            </form>
        )
    }
    
}