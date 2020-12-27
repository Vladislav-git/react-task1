import React from 'react';
import FormList from '../form-list/form-list';
import FormListFilter from "../form-list-filter/form-list-filter";
import FormAdd from "../form-add/form-add";

const taskNameIsValid = (taskname) => {
    if (taskname.match(/^[a-zA-Z0-9]{2,15}$/) !== null) {
        return true
    } else {
        return false
    }
} 

const firstNameIsValid = (firstname) => {
    if (firstname.match(/^[a-zA-Z0-9]{2,20}$/) !== null) {
        return true
    } else {
        return false
    }
} 

const secondNameIsValid = (secondname) => {
    if (secondname.match(/^[a-zA-Z0-9]{2,20}$/) !== null) {
        return true
    } else {
        return false
    }
} 

const emailIsValid = (email) => {
    if (email.match(/[a-zA-z]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}/) !== null) {
        return true
    } else {
        return false
    }
} 

const descriptionIsValid = (description) => {
    if (description.match(/./) !== null) {
        return true
    } else {
        return false
    }
} 

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{task_name:'2156', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'1', description:'jhmbn', id: Math.random()},
            {task_name:'dddddd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'48', description:'jhmbn', id: Math.random()},
            {task_name:'gdfgd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'3', description:'jhmbn', id: Math.random()}],
            test: {},
            isFormVisible: false,
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.addNewForm = this.addNewForm.bind(this);
        this.onChangeAdd = this.onChangeAdd.bind(this);
        this.sortShort = this.sortShort.bind(this);
        this.sortLong = this.sortLong.bind(this);
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

    onChangeAdd (data) {
        if (data.id) {
            const index = this.state.data.findIndex(elem => elem.id === data.id)
            const before = this.state.data.slice(0, index);
            const after = this.state.data.slice(index + 1);
            
            const newArr = [...before, data, ...after];
            this.setState({
                data : newArr,
                isFormVisible: false, 
            })
        } else {
            const newArr = [...this.state.data, {...data, id: Math.random()}];
            this.setState({
                data : newArr,
                isFormVisible: false,
            })
        }
    }

    sortShort () {
        const sortedData = [...this.state.data].sort((item, nextitem) => {
            if (parseInt(item.deadeline) > parseInt(nextitem.deadeline)) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({
            data : sortedData
        })
        
    }

    sortLong () {
        const sortedData = [...this.state.data].sort((item, nextitem) => {
            if (parseInt(item.deadeline) < parseInt(nextitem.deadeline)) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({
            data : sortedData
        })
    }


    render () {
        return (
            <div className='app'>
            <FormListFilter addNewForm={this.addNewForm} sortShort={this.sortShort} sortLong={this.sortLong}/>
            <FormList data={this.state.data} onDelete={this.deleteItem} onChange={this.changeItem} />
            {this.state.isFormVisible ? <FormAdd onChangeAdd={this.onChangeAdd} data={this.state.test}/> : null}

        </div>
        )
    }    

}
