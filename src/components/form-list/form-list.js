import React from 'react';
import FormItem from "../form-item/form-item";


const FormList = ({data, onDelete, onChange}) => {

    const tasks = data.map((item) => {
        return (
            <div key={item.id}>
                <FormItem label={item} onDelete={() => onDelete(item.id)} onChange={() => onChange(item.id)}/>
            </div>
        )
    })

    return (
        <div>
            {tasks}
        </div>
    )
}

export default FormList;