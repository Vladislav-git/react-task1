import React, { useState } from 'react';
import FormList from '../form-list/form-list';
import FormListFilter from "../form-list-filter/form-list-filter";
import FormAdd from "../form-add/form-add";
import './app.css'


export default function App () {

    const data = {
        data: [{task_name:'2156', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'1', description:'jhmbn', id: Math.random()},
        {task_name:'dddddd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'48', description:'jhmbn', id: Math.random()},
        {task_name:'gdfgd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'3', description:'jhmbn', id: Math.random()}],
        test: {},
        isFormVisible: false,
    }

    const [state, setState] = useState(data);


    const deleteItem = (id) => {
        const index = state.findIndex(elem => elem.id === id)
        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newArr = [...before, ...after];
        setState ({
            data : newArr,
        })
    }

    const changeItem = (id) => {
        const dataToChange = {...state.find(elem => elem.id === id)};
        setState ({
            test: dataToChange || {},
            isFormVisible: true,
        })
    }

    const addNewForm = () => {
        setState({
            test: {},
            isFormVisible: true,
        })
    }

    const onChangeAdd = (data) => {
        if (data.id) {
            const index = state.findIndex(elem => elem.id === data.id)
            const before = state.slice(0, index);
            const after = state.slice(index + 1);
            
            const newArr = [...before, data, ...after];
            setState ({
                data : newArr,
                isFormVisible: false, 
            })
        } else {
            const newArr = [...state.data, {...data, id: Math.random()}];
            setState ({
                data : newArr,
                isFormVisible: false,
            })
        }
    }

    const sortShort = () => {
        const sortedData = [...state.data].sort((item, nextitem) => {
            if (parseInt(item.deadeline) > parseInt(nextitem.deadeline)) {
                return 1
            } else {
                return -1
            }
        })
        setState({
            data : sortedData
        })
        
    }

    const sortLong = () => {
        const sortedData = [...state.data].sort((item, nextitem) => {
            if (parseInt(item.deadeline) < parseInt(nextitem.deadeline)) {
                return 1
            } else {
                return -1
            }
        })
        setState({
            data : sortedData
        })
    }



    return (
        <div className='app'>
            <FormListFilter
                addNewForm={addNewForm}
                sortShort={sortShort}
                sortLong={sortLong}
            />
            <FormList
                data={state.data}
                onDelete={deleteItem}
                onChange={changeItem}
            />
            {
                state.isFormVisible 
                    ? <FormAdd onChangeAdd={onChangeAdd} data={state.test}/> 
                    : null
            }
        </div>
    )
}