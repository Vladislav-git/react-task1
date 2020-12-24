import React from 'react';

const FormItem = ({label}) => {
    return (
        <div className='item'>
            <span>{label}</span>
            <div>
                <button type='button'>del</button>
                <button type='button'>change</button>
            </div>
        </div>
    )
}

export default FormItem;