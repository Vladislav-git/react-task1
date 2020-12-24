import React from 'react';
import FormItem from "../form-item/form-item";

const FormList = ({data}) => {

    const tasks = data.map((item) => {
        return (
            <li key={item.id}>
                <FormItem label={item.label}/>
            </li>
        )
    })

    return (
        <ul>
            {tasks}
        </ul>
    )
}

export default FormList;