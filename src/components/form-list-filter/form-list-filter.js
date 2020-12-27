import React from 'react';

export default class FormListFilter extends React.Component {

    render() {
        const {addNewForm, sortShort, sortLong} = this.props;

        return (
            <div className='btn'>
                <button onClick={sortShort} >Short tasks</button>
                <button onClick={sortLong} >Long tasks</button>
                <button onClick={addNewForm} >Add new task</button>
            </div>
        )
    }
}
