import React from 'react';

const convertTimeValue = (time) => {
    const obj = { '1':'1 hour',
    '3':'3 hours',
    '5':'5 hours',
    '24':'1 day',
    '48':'2 days',}
    return obj[time]
}

export default class FormItem extends React.Component {

    render() {
        const {label, onDelete, onChange} = this.props;
        const {task_name, firstname, secondname, email, deadeline, description} = label;

        return (
            <div className='item'>
                <h3>{task_name}</h3>
                <p>{firstname}</p>
                <p>{secondname}</p>
                <p>{email}</p>
                <p>{convertTimeValue(deadeline)}</p>
                <p>{description}</p>
                <div>
                    <button type='button' onClick={onDelete}>del</button>
                    <button type='button' onClick={onChange}>change</button>
                </div>
            </div>
        )
    }
}



// const FormItem = ({label}) => {
//     return (
//         <div className='item'>
//             <span>{label}</span>
//             <div>
//                 <button type='button'>del</button>
//                 <button type='button'>change</button>
//             </div>
//         </div>
//     )
// }

// export default FormItem;