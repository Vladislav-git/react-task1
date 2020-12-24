import React from 'react';
import FormList from '../form-list/form-list';
import FormListFilter from "../form-list-filter/form-list-filter";
import FormAdd from "../form-add/form-add";


const App = () => {

    const data = [{label:'gdfgd', id: Math.random()}]

    return (
        <div className='app'>
            <FormListFilter />
            <FormList data={data} />
            <FormAdd />
        </div>
    )
}

export default App;