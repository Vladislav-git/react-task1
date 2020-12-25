import React from 'react';

export default class FormListFilter extends React.Component {

    render() {

        const {addNewForm} = this.props;

        return (
            <div className='btn'>
                <button>Short tasks</button>
                <button>Long tasks</button>
                <button onClick={addNewForm} >Add new task</button>
            </div>
        )
    }
}
