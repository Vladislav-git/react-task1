import React, {useEffect, useState, useRef} from 'react';
import './form-add.css';

const default_model = {
    task_name: '',
    firstname: '',
    secondname: '',
    email: '',
    deadeline: '1',
    description: '',
    id: 0
};


const formValid = ({errorForm, model}) => {
    let valid = true;
    Object.values(errorForm).forEach(val => {
        val.length > 0 && (valid = false);
    })
    Object.values(model).forEach(val => {
        val === null && (valid = false);
    })
    return valid;
}

// export default class FormAdd extends React.Component {

//         constructor(props) {
//             super(props);
//             this.state = { model: default_model,
//                 errorForm: {
//                     task_name: '',
//                     firstname: '',
//                     secondname: '',
//                     email: '',
//                     deadeline: '',
//                     description: '',
//                 }
//             };
//         }

//         handleSubmit = (event) => {
//             event.preventDefault();
//             if (formValid(this.state)) {
//                 const {model} = this.state
//                 this.props.onChangeAdd(model)
//             } else {
//                 console.error('error')
//             }
//         }

//         handleChange = (event) => {
//             event.preventDefault();
//             const {name, value} = event.target;
//             let errorForm = this.state.errorForm;
            
//             switch (name) {
//                 case 'task_name':
//                     errorForm.task_name = value.length < 3 
//                         ? '3 char req' 
//                         : '';
//                     break;
//                 case 'firstname':
//                     errorForm.firstname = value.length < 3
//                         ? '3 char req' 
//                         : '';
//                     break;
//                 case 'secondname':
//                     errorForm.secondname = value.length < 3
//                         ? '3 char req' 
//                         : '';
//                     break;
//                 case 'email':
//                     errorForm.email = value.match(/[a-zA-z]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}/) === null
//                         ? 'wrong email name'
//                         : '';
//                     break;
//                 case 'deadline':
//                     errorForm.deadeline = value.length > 0
//                         ? ''
//                         : 'error';
//                     break;
//                 case 'description':
//                     errorForm.description = value.length < 3
//                         ? '3 char req' 
//                         : '';
//                     break;
//                 default:
//                     break;
//             }
//             this.setState({errorForm, model: {
//                 ...this.state.model,
//                 [name]: value,
//                 }
//             })
//             console.log(this.state)
//         }


//         componentDidMount() {
//             if (this.props.data.id) {
//                 this.setState({model: this.props.data})
//             }
//         }

//         componentDidUpdate(prevProps) {
//             if (this.props.data.id && (this.state.model.id !== this.props.data.id)) {
//                 this.setState({model: this.props.data})
//             } else if (!this.props.data.id && prevProps.data.id === this.state.model.id) {
//                 this.setState({model: default_model})
//             }
//         }

//     render() {
        
//         const {errorForm, model} = this.state;
        
//         return (
//             <form className='form' >
//                 <h3 className='header'>Add task</h3>
//                 <div>
//                     <label>Task name: </label>
//                     <input
//                         className={errorForm.task_name.length > 0 ? 'error' : null}
//                         value={model.task_name}
//                         type='text'
//                         placeholder='task name'
//                         name='task_name'
//                         onChange={this.handleChange}
//                     />
//                     {errorForm.task_name.length > 0 && (
//                         <div className='input-notify'>{errorForm.task_name}</div>
//                     )}
//                 </div>
//                 <div>
//                     <label>Firstname: </label>
//                     <input
//                         className={errorForm.firstname.length > 0 ? 'error' : null}
//                         value={model.firstname}
//                         type='text'
//                         placeholder='firstname'
//                         name='firstname'
//                         onChange={this.handleChange}
//                     />
//                     {errorForm.firstname.length > 0 && (
//                         <div className='input-notify'>{errorForm.firstname}</div>
//                     )}
//                 </div>
//                 <div>
//                     <label>Secondname: </label>
//                     <input
//                         className={errorForm.secondname.length > 0 ? 'error' : null}
//                         value={model.secondname}
//                         type='text'
//                         placeholder='secondname'
//                         name='secondname'
//                         onChange={this.handleChange}
//                     />
//                     {errorForm.secondname.length > 0 && (
//                         <div className='input-notify'>{errorForm.secondname}</div>
//                     )}
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input
//                         className={errorForm.email.length > 0 ? 'error' : null}
//                         value={model.email}
//                         type='text'
//                         placeholder='email'
//                         name='email'
//                         onChange={this.handleChange}
//                     />
//                     {errorForm.email.length > 0 && (
//                         <div className='input-notify'>{errorForm.email}</div>
//                     )}
//                 </div>
//                 <div className='select'>
//                     <label>Deadline: </label>
//                     <select name='deadeline' value={model.deadeline} onChange={this.handleChange}>
//                         <option value='1'>1 hour</option>
//                         <option value='3'>3 hours</option>
//                         <option value='5'>5 hours</option>
//                         <option value='24'>1 day</option>
//                         <option value='48'>2 days</option>
//                     </select>
//                 </div>
//                 <div>
//                     <div className='description'>Task description: </div>
//                     <input
//                         className={errorForm.description.length > 0 ? 'error' : null}
//                         value={model.description}
//                         type='text'
//                         placeholder='Description'
//                         name='description'
//                         onChange={this.handleChange}
//                     />
//                     {errorForm.description.length > 0 && (
//                         <div className='input-notify'>{errorForm.description}</div>
//                     )}
//                 </div>
//                 <button
//                     className='btn-add-change'
//                     type="submit"
//                     onClick={this.handleSubmit}
//                 >
//                     {this.state.model.id ? 'change' : 'add'}
//                 </button>
//             </form>
//         )
//     }
    
// }



export default function FormAdd ({data, onChangeAdd}) {

    const initialState = { model: default_model,
        errorForm: {
            task_name: '',
            firstname: '',
            secondname: '',
            email: '',
            deadeline: '',
            description: '',
        }
    };

    const [state, setState] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValid(state)) {
            const {model} = state
            onChangeAdd(model)
        } else {
            console.error('error')
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errorForm = state.errorForm;
        
        switch (name) {
            case 'task_name':
                errorForm.task_name = value.length < 3 
                    ? '3 char req' 
                    : '';
                break;
            case 'firstname':
                errorForm.firstname = value.length < 3
                    ? '3 char req' 
                    : '';
                break;
            case 'secondname':
                errorForm.secondname = value.length < 3
                    ? '3 char req' 
                    : '';
                break;
            case 'email':
                errorForm.email = value.match(/[a-zA-z]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}/) === null
                    ? 'wrong email name'
                    : '';
                break;
            case 'deadline':
                errorForm.deadeline = value.length > 0
                    ? ''
                    : 'error';
                break;
            case 'description':
                errorForm.description = value.length < 3
                    ? '3 char req' 
                    : '';
                break;
            default:
                break;
        }
        setState({
            ...state,
            errorForm, 
            model: {
                ...state.model,
                [name]: value,
            }
        })
    }

    useEffect(() => {
        if (data.id) {
            setState({
                ...state,
                model: data
            })
        }
    },[state])

        //         componentDidMount() {
        //             if (this.props.data.id) {
        //                 this.setState({model: this.props.data})
        //             }
        //         }
        
        //         componentDidUpdate(prevProps) {
        //             if (this.props.data.id && (this.state.model.id !== this.props.data.id)) {
        //                 this.setState({model: this.props.data})
        //             } else if (!this.props.data.id && prevProps.data.id === this.state.model.id) {
        //                 this.setState({model: default_model})
        //             }
        //         }


    
    const {errorForm, model} = state;
    
    return (
        <form className='form' >
            <h3 className='header'>Add task</h3>
            <div>
                <label>Task name: </label>
                <input
                    className={errorForm.task_name.length > 0 ? 'error' : null}
                    value={model.task_name}
                    type='text'
                    placeholder='task name'
                    name='task_name'
                    onChange={handleChange}
                />
                {errorForm.task_name.length > 0 && (
                    <div className='input-notify'>{errorForm.task_name}</div>
                )}
            </div>
            <div>
                <label>Firstname: </label>
                <input
                    className={errorForm.firstname.length > 0 ? 'error' : null}
                    value={model.firstname}
                    type='text'
                    placeholder='firstname'
                    name='firstname'
                    onChange={handleChange}
                />
                {errorForm.firstname.length > 0 && (
                    <div className='input-notify'>{errorForm.firstname}</div>
                )}
            </div>
            <div>
                <label>Secondname: </label>
                <input
                    className={errorForm.secondname.length > 0 ? 'error' : null}
                    value={model.secondname}
                    type='text'
                    placeholder='secondname'
                    name='secondname'
                    onChange={handleChange}
                />
                {errorForm.secondname.length > 0 && (
                    <div className='input-notify'>{errorForm.secondname}</div>
                )}
            </div>
            <div>
                <label>Email: </label>
                <input
                    className={errorForm.email.length > 0 ? 'error' : null}
                    value={model.email}
                    type='text'
                    placeholder='email'
                    name='email'
                    onChange={handleChange}
                />
                {errorForm.email.length > 0 && (
                    <div className='input-notify'>{errorForm.email}</div>
                )}
            </div>
            <div className='select'>
                <label>Deadline: </label>
                <select name='deadeline' value={model.deadeline} onChange={handleChange}>
                    <option value='1'>1 hour</option>
                    <option value='3'>3 hours</option>
                    <option value='5'>5 hours</option>
                    <option value='24'>1 day</option>
                    <option value='48'>2 days</option>
                </select>
            </div>
            <div>
                <div className='description'>Task description: </div>
                <input
                    className={errorForm.description.length > 0 ? 'error' : null}
                    value={model.description}
                    type='text'
                    placeholder='Description'
                    name='description'
                    onChange={handleChange}
                />
                {errorForm.description.length > 0 && (
                    <div className='input-notify'>{errorForm.description}</div>
                )}
            </div>
            <button
                className='btn-add-change'
                type="submit"
                onClick={handleSubmit}
            >
                {state.model.id ? 'change' : 'add'}
            </button>
        </form>
    )
}