import React from 'react';
import './form-list-filter.css'

export default class FormListFilter extends React.Component {

    render() {
        const {addNewForm, sortShort, sortLong} = this.props;

        return (
            <div >
                <h1>Welcome to my app</h1>
                <button className='btn' onClick={sortShort} >Short tasks</button>
                <button className='btn' onClick={sortLong} >Long tasks</button>
                <button className='btn' onClick={addNewForm} >Add new task</button>
            </div>
        )
    }
}
