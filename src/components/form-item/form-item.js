import React from 'react';
import './form-item.css'

const convertTimeValue = (time) => {
    const obj = { '1':'1 hour',
    '3':'3 hours',
    '5':'5 hours',
    '24':'1 day',
    '48':'2 days',}
    return obj[time]
}

// export default class FormItem extends React.Component {

//     render() {
//         const {label, onDelete, onChange} = this.props;
//         const {task_name, firstname, secondname, email, deadeline, description} = label;

//         return (
//             <div className='item'>
//                 <h3>{task_name}</h3>
//                 <p><label>Firstname: </label>{firstname}</p>
//                 <p><label>Secondname: </label>{secondname}</p>
//                 <p><label>Email: </label>{email}</p>
//                 <p><label>Deadline: </label>{convertTimeValue(deadeline)}</p>
//                 <p><label>Task description: </label>{description}</p>
//                 <div>
//                     <button className='btn' type='button' onClick={onDelete}>del</button>
//                     <button className='btn' type='button' onClick={onChange}>change</button>
//                 </div>
//             </div>
//         )
//     }
// }


export default function FormItem ({data, onDelete, onChange}) {

    const {task_name, firstname, secondname, email, deadeline, description} = data;
    
    return (
        <div className='item'>
            <h3>{task_name}</h3>
            <p><label>Firstname: </label>{firstname}</p>
            <p><label>Secondname: </label>{secondname}</p>
            <p><label>Email: </label>{email}</p>
            <p><label>Deadline: </label>{convertTimeValue(deadeline)}</p>
            <p><label>Task description: </label>{description}</p>
            <div>
                <button className='btn' type='button' onClick={onDelete}>del</button>
                <button className='btn' type='button' onClick={onChange}>change</button>
            </div>
        </div>
    )
    
}