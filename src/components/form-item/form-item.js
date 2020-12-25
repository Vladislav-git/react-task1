import React from 'react';



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
                <p>{deadeline}</p>
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