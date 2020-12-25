import React from 'react';
import FormList from '../form-list/form-list';
import FormListFilter from "../form-list-filter/form-list-filter";
import FormAdd from "../form-add/form-add";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{task_name:'2156', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'1 hour', description:'jhmbn', id: Math.random()},
            {task_name:'dddddd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'3 hours', description:'jhmbn', id: Math.random()},
            {task_name:'gdfgd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'3 hours', description:'jhmbn', id: Math.random()}],
            test: {},
            isFormVisible: false,
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.addNewForm = this.addNewForm.bind(this);
    }

    deleteItem (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data : newArr,
            }
        })
    }

    changeItem (id) {
        this.setState(({data}) => {
            const dataToChange = {...data.find(elem => elem.id === id)};
            return {
                test: dataToChange || {},
                isFormVisible: true,
            }
        })
        console.log(this.state.test)
    }

    addNewForm () {

        this.setState({
            isFormVisible: false,
        })

        this.setState(() => {
            return {
                test: {},
                isFormVisible: true,
            }
        })
    }

    render () {
        return (
            <div className='app'>
            <FormListFilter addNewForm={this.addNewForm}/>
            <FormList data={this.state.data} onDelete={this.deleteItem} onChange={this.changeItem} />
            {this.state.isFormVisible ? <FormAdd data={this.state.test}/> : null}

        </div>
        )
    }    

}
